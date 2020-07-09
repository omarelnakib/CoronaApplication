import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import PostItem from '../../components/PostItem'
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');

const HomeScreen = props => {
  const [ScreenHeight, setScreenHeight] = useState(height);
  const [ScreenWidth, setScreenWidth] = useState(width);
  const [SearchText,setSearchText] = useState('')
  const [DataList, setDataList] = useState([
    {
      id: '1',
      img: ImagesPaths.DummyPatient,
      author:'مستشفى جامعة عين شمس التخصصي',
      title:"العزل المنزلي ,لللتأكد عياده منفصله تماما لحالات إشتباه الكورونا",
      paragraph:'العزل المنزلي لللتأكد عياده منفصله تماما لحالات إشتباه الكورونا ....العياده تعمل يوميا من السبت الي الاربعاء من الساعه 11 الي الساعه1 ظهرا بعياده الفحص الشامل...للإستعلام 01093878175'
     , video:require('../../assets/dummyVideo.mp4'),
     contentImg:''
    },
  {
    id: '2',
    img: ImagesPaths.DummyPatient,
    author:'مستشفى جامعة عين شمس التخصصي',
    title:"يعني ايه عزل منزلي؟",
    paragraph:'',
    video:require('../../assets/video1.mp4'),
  },
{
  id: '3',
  author:'جامعة عين شمس',
  img: ImagesPaths.ASULogo,
  title:"جامعة عين شمس تواجه فيروس كورونا",
  paragraph:'في إطار استعدادات جامعة عين شمس لمواجهه التطورات المحتملة لجائحة فيروس كورونا، كلف ا.د./ محمود المتيني رئيس الجامعة قطاعات الجامعة المختلفة بوضع خطة لإدارة الموقف من مختلف جوانبه الطبية والتعليمية والبيئية. \n  تضمنت الخطة الطبية والبيئة زيادة حملات التوعية داخل الجامعة والتى بدأت من أول الفصل الدراسي الثاني  من خلال زيادة عدد الفرق الطبية المختصة بحملات التوعية إلى 6 فرق لنشر الوعي الصحي بين الطلاب وأعضـاء هيئة التدريس والعاملين بالجامعة بدءا من يوم الإثنين الموافق 9/3/ 2020 وذلك بالتنسيق بين كل من فريق مكافحة العدوى بالمستشفيات وفريق الادارة العامة للشئون الطبية وفريق مكافحة العدوى بمستشفى عين شمس التخصصي وأخصائي الرعاية المركزة والصدر المرسلين من أقسام كلية الطب للمشاركة في التوعية مع وضع جدول زمني لتنفيذ عدد من ندوات وورش العمل للتوعية بجميع كليات ومعاهد الجامعة. \n  وكذلك التعاقد الفوري مع شركات مختصة بالتعقيم تعمل على تطبيق أحدث أساليب التعقيم لتطهير كافة المنشـآت الجامعية من فصول دراسية ومدرجات وقاعات امتحانات ومكاتب اداريه وأماكن الخدمية بغرض تحقيق أقصــى درجات الأمان للطلاب وأعضـاء هيئة التدريس والعاملين بالجامعة  \n  كما اشتملت الخطة على المراجعة الدورية لتجهيزات العيادات والمراكز الطبية من خلال توفير كافة المستلزمات الطبية المطلوبة مع إجراء متابعة مستمرة لجميع المستهلكات وتعويضها. \n وبناء علية تم تنظيم اجتماع برئاسة أ.د. عبد الفتاح محمد فتحي سعود (نائب رئيس الجامعة لشئون التعليم والطلاب) و أ.د. نظمي عبد الحميد (نائب رئيس الجامعة لشئون خدمة المجتمع والبيئة) ووكلاء الكليات لشئون خدمة المجتمع وتنمية البيئة بالكليات المختلفة والسـادة مديري المراكز الطبية بالكليات المختلفة للتعريف بالية المحددة لتعريف الحالات المشتبه بإصابتها طبقا للبروتوكول الصـادر من منظمة الصحة العالمية. \n  كما تم التأكد على آلية نقل وتحويل الحالات المشتبه بهـا بســيارة اسعاف مخصصة لنقل حالات الاشتباه فقط واتخاذ كافة الإجراءات الطبية الاحترازية لتطهير السـيارة بعد نقل الحالات، ومن ثم متابعة الحالات المشتيه بهـا بإجراء كافة التحاليل اللازمة بمعامل وزارة الصحة على ان يتم نقل الحالة بعد ذلك للعزل بالمستشفيات المخصصة من قبل وزارة الصحة بعد إبلاغ المجلس الأعلى للجامعات. \n مع العلم ان جميع الحالات محل الاشتباه التي تم التعامل معها وحجزهـا وإجراء كافة التحاليل الطبية عليها جاءت نتائجها سلبية. \n  كما تضمنت الخطة استعدادات الجامعة في حالة الاضطرار إلى تعليق الدراسة ببعض او جميع الكليات بسبب أى تطور للمخاطر الطبية الحالية وتم تشكيل لجنة ادارة الازمة بتكليف من ا.د./ محمود المتيني رئيس الجامعة وبرئاسة ا.د / عبد الفتاح سعود – نائب رئيس الجامعة لشئون التعليم والطلاب، وعضوية كل من ا.د / منى عبدالعال – المدير التنفيذي لإدارة تطوير التعليم، ا.د / اسلام حجازي – مدير شبكة المعلومات بالجامعة CIO،ا.د / ياسر الجبرتي – مدير مركز التعليم الإلكتروني بالجامعة، ود /أحمد سمير بكر – نائب مركز التعليم الإلكتروني بكلية الطب. \n انعقدت اللجنة يوم الاثنين الموافق 9/3/2020 وخلصت الى ضرورة " التحول من التعلم التقليدي الى التعلم عن بُعد فيما تبقى من العام الدراسي  " من خلال إجراءات استباقية تحتوي على خطة أساسية وأخرى بديلة لمواجهة الازمة بحيث يتمكن الطالب من متابعة المحاضرات والتفاعل مع أعضاء هيئة التدريس وبين الطلاب بعضهم البعض بالإضافة إلى الاطلاع على التكليفات المطلوبة وتسليمها ومتابعة ما يتم الإعلان عنه من مستجدات من خلال استخدام أنظمة إدارة التعلم الإلكتروني والفصول الافتراضية. \n كما وضعت اللجنة خطة استمرارية العمل في حال حدوث الازمة والتي من شانها تقييم الوضع ودراسة البدائل المتاحة والتوصية بالبديل الأنسب ورفع الامر لرئيس الجامعة لاتخاذ القرار وبناءً عليه يتم اخطار الكليات والجهات المعنية بالتفعيل للبدء في تنفيذ الخطة وتوجيه الطلاب وأعضاء هيئة التدريس الى المسار البديل من خلال البريد الالكتروني الرسمي ووسائل التواصل المختلفة. \n\n  ',
  video:require('../../assets/video2.mp4'),
},


]);
const [displayedList , setDisplayedList] = useState(DataList);

  const _navigate = (event) => {
    props.navigation.navigate(event);
  };
  useEffect(() => {

    //get screen dimensions
    const updateDimensions = () => {
      setScreenHeight(Dimensions.get('window').height);
      setScreenWidth(Dimensions.get('window').width);
    }
    //when orientation of screen changes, get updated width & height
    Dimensions.addEventListener('change', updateDimensions);
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    }
  });

  // get elements match search text
  const onChangeText = (event) => {
    setSearchText(event);
    if(event != "")
    {
        let list = DataList.filter(i => i.title.includes(event));
        setDisplayedList(list);
    }
    else{
        setDisplayedList([...DataList]);
    }

}
  return (
   <View style={ Style.container}>
     {/* Header */}
       <Header style={{ height: 70 }} SearchBar 
                searchValue={SearchText}
                leftIcon='menu'
                rightIcon='notification'
                HandleBack={() => props.navigation.openDrawer()}
                onPressNotification={() => props.navigation.navigate('NotificationScreen')}
                onChange={(e) => onChangeText(e)}
            ></Header>
            
                {displayedList.length > 0 ? 
                       <SafeAreaView style={Style.bodyContent}>
                         {/* List of all posts */}
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={displayedList}
                        extraData={displayedList}
                        renderItem={({ item, index }) => (
                          <PostItem title={item.title} author={item.author} handleEvent={()=>{props.navigation.navigate('PostScreen',{postItem:item})}} image={item.img}></PostItem>
                          )}
                        keyExtractor={item => item.id}
                      />
                    </SafeAreaView>
                    // in case there is no items in  search
                    : ( SearchText != "") ?
                        <View style={Style.EmptyContent}>
                           <IconButton icon='magnify' color={Colors.lightgray} size={100} style={Style.iconStyle} />
                            <Text style={Style.textEmptyStyle}>لا توجد منشورات تحتوي ما تبحث عنه</Text>
                        </View>
                        :
                        <View/>
                    
                 }
   </View>
  )
}
export default HomeScreen;
