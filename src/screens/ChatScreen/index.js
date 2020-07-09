import React, { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import styles from './style'
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat'
import { Text } from 'native-base'
import { IconButton } from 'react-native-paper'
import Colors from '../../assets/constants/Colors'
import Header from '../../components/Header'
import ImagesPaths from '../../assets/constants/ImagesPaths'

const ChatScreen = (props) => {
    const [messages, setMessages] = useState([]);


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
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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