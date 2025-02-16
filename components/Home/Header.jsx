import { View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import {UserDetailContext} from './../../context/UserDetailContext'
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
  const {userDetail,setUserDetail} = useContext(UserDetailContext)
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }}>
    <View>
      <Text
      style={{
         fontFamily:'outfitB old',
         fontSize:24
      }}
      >Hello,{userDetail?.name}</Text>
      <Text
      style={{
        fontFamily:'outfitRegular',
        fontSize:17
      }}
      >
        Let's Get Started!
      </Text>
    </View>
    <TouchableOpacity>
        <Ionicons name="settings-outline" size={32} color="black"/>
    </TouchableOpacity>
    </View>
  )
}    