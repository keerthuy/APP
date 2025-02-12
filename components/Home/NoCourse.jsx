import { View, Text , Image} from 'react-native'
import React from 'react'

export default function NoCourse() {
  return (
    <View style={{
        marginTop:40, 
        display:'flex',
        alignItems:'center'
    }}> 
<Image source={require('./../../assets/images/book.png')}
style={{
    heigth:200,
    width: 200
}} 
/>
<Text style={{
    fontFamily:'Outfit-bold',
    fontSize:25,
    textAlign:'center'
}}>You Don't Have Any Course</Text>
    </View>
  )
}