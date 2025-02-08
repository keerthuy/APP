import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import Colors from './../../constant/Colors';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, dp } from '../../Config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
export default function signUp() {
const router= useRouter();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [fullName,setFullName]=useState();
const  CreateNewAccount=()=>{
createUserWithEmailAndPassword(auth,email,password)
.then(async(resp)=>{
    const user=resp.user;
    console.log(user);
    await SaveUser(user);
    //Save the user to the database
})
.catch(e=>{
    console.log(e.message);
})
}
const SaveUser=async(user)=>{
    const data={
        name: fullName,
        email: email,
        member: false,
        uid: user?.uid
    }
    await setDoc(doc(dp, 'users', email),data)
    
    setUserDetail(data);
    



 //Nativage to New Screen
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
                        Create New Account
                    </Text>
                    <TextInput style={styles.textInput} onChangeText={(value)=>setFullName(value)}   placeholder="Enter Full Name" />
                    <TextInput style={styles.textInput} onChangeText={(value)=>setEmail(value)} placeholder="Enter Email address" />
                    <TextInput onChangeText={(value)=>setPassword(value)}
                        style={styles.textInput}
                        placeholder="Create Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={
                        {
                            backgroundColor:Colors.PRIMARY,
                            marginTop:25,
                            width:"100%",
                            padding:10,
                            borderRadius:10
                        }}                          
                        onPress={CreateNewAccount}>
                        <Text style={{
                            fontFamily:'outfit',
                            fontSize:20,
                            textAlign:'center',
                            color:Colors.WHITE
    
                            }}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={
                        {
                           display:'flex', 
                           flexDirection:'row', gap:5,
                           marginTop:10,
                        
                        }
                    }>
                    <Text style={{fontFamily:'outfit'}}>
                    Already have an Account ?
                    </Text>
                        <Pressable
                        onPress={()=>router.push('/auth/signIn')}
                        >
                            <Text
                            style={{color:Colors.PRIMARY,fontFamily:'outfitBold'}}> 
                                Sign In Here
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
