import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function AddCourse() {
    const {loading, setLoading} = useState(false);
    const onGererateTopic =()=>{

    }
    return (
    <View 
    style={{
        padding:25,
        backgroundColor:Colors.WHITE,
        flex:1
    }}>
        <Text style={{
           fontFamily:'outfitBold',
           fontSize:30
        }}>
     Create New Course
        </Text>
        <Text
        style={{
            fontFamily:'outfitRegular',
            fontSize:30
        }}
        >What you want to learn today? </Text>
        <Text style={{
            fontFamily:'outfitRegular',
            fontSize:20,
            marginTop:8,
            color:Colors.GRAY

        }}>
            Write what course you want to create (EX.learn
            React Js Digital Marketing Guide,10th Science
            Chapter)
        </Text>
  <TextInput placeholder='(EX.Learn Python,Learn 12th chemistry)' style={styles.textInput}
  numberOfLines={3}
  multiline={true}
  />
  <Button text={'Generate Topic'} type='outline' onPress={()=>onGererateTopic()}/>

</View>
  )
}
const styles = StyleSheet.create({
textInput:{
padding:15,
borderWidth:1,
borderRadius:15,
height:100,
marginTop:10,
alignItems:'flex-start',
fontSize:18,
}
})