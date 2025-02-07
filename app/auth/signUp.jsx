import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import Colors from './../../constant/Colors';
import { useRouter } from 'expo-router';

export default function signUp() {
const router= useRouter();
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
                    <TextInput style={styles.textInput} placeholder="Enter Full Name" />
                    <TextInput style={styles.textInput} placeholder="Enter Email address" />
                    <TextInput
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
                        }
                    }>
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
