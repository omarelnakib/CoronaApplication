import React, { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import styles from './style'
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat'
import { Text } from 'native-base'
import { IconButton } from 'react-native-paper'
import Colors from '../../assets/constants/Colors'
import Header from '../../components/Header'
import ImagesPaths from '../../assets/constants/ImagesPaths'

import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Case';
import Globals from '../../assets/constants/Globals'
const ChatScreen = (props) => {
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        // dummy messages
        setMessages([
            {
                _id: 2,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },

            },
        ])
    }, [])
    // on press send
    const onSend = useCallback((messages = []) => {
        let CaseId = props.route.params.CaseId;
        var date = new Date();

        var message = {
            caseid: CaseId,
            text: `%0D%0A ${Globals.User.Name}%0D%0A${date} %0D%0A %0D%0A${messages[0].text}%0D%0A`,
            title: ` ${Globals.User.Name} ارسل رسالة في البلاغ رقم ${CaseId}`,
            body:  `%0D%0A ${Globals.User.Name}%0D%0A${date} %0D%0A %0D%0A${messages}%0D%0A`,

        }
        console.log("messages",messages[0].text)
        dispatch(Action.Send_Message(message, (event) => {
            if (event.ok) {
                // setIsLoading(false);

                        console.log("tempData",event.data)
                    // setCaseData({...tempData})
                    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
 
                // props.nav.navigate('DrawerNavigator')
            }
            else {
                // setIsLoading(false);
                toast(event.data)
            }

        }))
    }, [])

    return (
        <View style={{ flex: 1,backgroundColor:Colors.light }}>
            {/* Header */} 
       <Header style={{ height: 70 }} 
                leftIcon='back'
                HandleBack={() => props.navigation.pop()}
                title='الفريق الطبي'
            ></Header>
            {/* Chat Component  */}
            <GiftedChat
        
                messages={messages} 
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderSend={(props) => (
                    <Send
                        {...props}
                        containerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            icon='send' color={Colors.primary}
                        />
                    </Send>
                )}
                // renderActions={() => (
                //     <IconButton
                //       icon={'paperclip'}
                //       size={30}
                //       color={Colors.primary}
                //     />
                //   )}

                  renderBubble={props => {
                    return (
                      <Bubble
                        {...props}
                        
                        wrapperStyle={{
                          right: {
                            backgroundColor: Colors.primary,
                          },
                        }}
                      />
                    );
                  }}
           
            ></GiftedChat>
        </View>
    )
}

export default ChatScreen