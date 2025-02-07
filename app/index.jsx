import { Text, View,  Image, StyleSheet, TouchableOpacity} from "react-native";
import  Colors  from '../constant/Colors';
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex:1,
        backgroundColor:Colors.WHITE
      }}>
   <Image source={require('./../assets/images/landing.png')}
   style={{
    width:'100%',
    height: 300,
    marginTop:70
   }}
   />
 <View
 style={{
  padding:25,
  backgroundColor:Colors.PRIMARY,
  height:'100%',
  borderTopLeftRadius:35,
  borderTopRightRadius:35
 }}>
 <Text style={{
    textAlign:'center',
    fontSize:30,
    color:Colors.WHITE,
    fontFamily:'outfitBold'
    }}>Welcome to My First App</Text>
    <Text
    style={{
      textAlign:'center',
      marginTop:20,
      fontSize:20,
      color:Colors.WHITE,
      fontfamily:'outfit'
    }}
    >Helllo Developers! here I am develop a mobile app using React native</Text>
  <TouchableOpacity  style={styles.button} onPress={()=>router.push('/auth/signUp')}>
 <Text style={[styles.buttonText,{color:Colors.PRIMARY}]}>Get Started</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.button,{backgroundColor:Colors.PRIMARY,
  borderWidth:1,
  borderColor:Colors.WHITE
 }]} onPress={()=>router.push('/auth/signIn')}>
  <Text style={[styles.buttonText,{color:Colors.WHITE}]}>Already have an account?</Text>
 </TouchableOpacity>
 </View>



    </View>
  );
}
const styles = StyleSheet.create({
  button:{
     padding:17,
     backgroundColor:Colors.WHITE,
     borderRadius:10,
     marginTop:20
  },
  buttonText:{
  textAlign:'center',
  fontSize:18,
  fontFamily:'outfit'
  }
})
