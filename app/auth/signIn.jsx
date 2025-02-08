import { View, Text,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView,Image,Pressable, ToastAndroid, ActivityIndicator} from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../../constant/Colors';
import { useRouter } from 'expo-router';
import {auth, dp} from '../../Config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {UserDetailContext} from './../../context/UserDetailContext'
import { doc, getDoc } from 'firebase/firestore';
export default function signIn() {
const router=useRouter();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const {userDetail,setUserDetail}= useContext(UserDetailContext)
const [loading,setLoading]=useState(false);
const onSignInClick=()=>{
    setLoading(true)
    signInWithEmailAndPassword(auth,email,password)
       .then(async(resp)=>{
            const user= resp.user
            console.log(user)
           await getUserDetail();
           setLoading(false);
       })
    
       .catch(e=>{
        console.log(e)
        setLoading(false);
        ToastAndroid.show('Incorrect Email & Password',ToastAndroid.BOTTOM)
       })
}

const getUserDetail=async()=>{
    const result = await getDoc(doc(dp,'users',email));
    console.log(result.data());
}
return (
     <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 100,
                            padding: 25,
                            flex: 1,
                            color: Colors.PRIMARY,
                        }}
                    >
                        <Image
                            source={require('./../../assets/images/logo.png')}
                            style={{
                                width: 180,
                                height: 180,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 30,
                                fontFamily: 'outfitBold',
                            }}
                        >
                            Welcome Back
                        </Text>
                        <TextInput style={styles.textInput}   onChangeText={(value)=>setEmail(value)} placeholder="Enter Email Address" />
                        <TextInput style={styles.textInput}  onChangeText={(value)=>setPassword(value)}   placeholder="Enter the Password" />
                        <TouchableOpacity 
                        onPress={onSignInClick}
                        disabled ={loading}
                        style={
                            {
                                backgroundColor:Colors.PRIMARY,
                                marginTop:25,
                                width:"100%",
                                padding:10,
                                borderRadius:10
                            }
                        }>
                         {!loading ?  <Text style={{
                                fontFamily:'outfit',
                                fontSize:20,
                                textAlign:'center',
                                color:Colors.WHITE
        
                                }}>Sign In</Text>:
                             <ActivityIndicator size={'large'} color={Colors.WHITE} />}
                        </TouchableOpacity>
                        <View style={
                            {
                               display:'flex', 
                               flexDirection:'row', gap:5,
                               marginTop:10,
                            
                            }
                        }>
                        <Text style={{fontFamily:'outfit'}}>
                        Don't have an account ?
                        </Text>
                            <Pressable
                            onPress={()=>router.push('/auth/signUp')}
                            >
                                <Text
                                style={{color:Colors.PRIMARY,fontFamily:'outfitBold'}}> 
                                    Create New Here
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    const styles = StyleSheet.create({
        textInput: {
            borderWidth: 1,
            width: '100%',
            padding: 15,
            marginTop: 20,
            borderRadius: 8,
        },
    });
 