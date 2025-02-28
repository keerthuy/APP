import { View, Text,FlatList,Image,StyleSheet} from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/option'
import Colors from '../../constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function CourseList({courseList}) {
  return (
    <View style={{
      marginTop:15,

    }}>
      <Text
      style={{
       fontFamily :'outfitBold',
       fontSize: 25 
      }}>Courses</Text>
      <FlatList
         data={courseList}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index}) => (
          <View key={index} style={styles.courseContainer}>
            <Image source={imageAssets[item.banner_image]}
            style={{
              width : '100%',
              height : 150,
              borderRadius:15
            }}
            />
            <Text
            style={{
              fontFamily:'outfitBold',
              marginTop:10,
              fontSize:18
            }}>{item?.courseTitle}</Text>
             <View style={{
              display:'flex',
              flexDirection:'row',
              gap:5,
              alignItems: 'center',
              marginTop:5 

             }}>
             <Ionicons name="book-outline" size={24} color="black" />
             <Text
             style={{
              fontFamily:'outfit'
             }}
             >
              {item?.chapter?.lenght} Chapter</Text>
              </View>
          </View>
         )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer:{
     padding:10,
     backgroundColor:Colors.BG_GRAY,
     margin:6,
     borderRadius: 15,
     width :  240
  }
})