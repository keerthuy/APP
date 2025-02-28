import { View, Text, StyleSheet, Platform} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from './../../components/Home/Header'
import NoCourse from './../../components/Home/NoCourse'
import Colors from '../../constant/Colors'
import {dp} from './../../Config/firebaseConfig'
import { UserDetailContext } from './../../context/UserDetailContext'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import CourseList from '../../components/Home/CourseList'
import { PraticeOption } from '../../constant/option'
import PraticeSection from '../../components/Home/PraticeSection'
export default function Home() {

const {userDetail,setUserDetail}=useContext(UserDetailContext);
const [courseList,setCourseList]=useState([]);
 
 useEffect(()=> {
  userDetail && GetCourseList();
  }, [userDetail]) 
 
   
  const GetCourseList = async ()=> {
  setCourseList([])
  const q = query(collection(dp,'Courses'),where("createdBy",'==',userDetail?.email));
  const querySnapshot = await getDocs(q); 
  
  querySnapshot.forEach((doc)=>{
    console.log("---", doc.data());
    setCourseList(prev => [...prev,doc.data()])
 })
}
  return (
    <View 
    style ={{
      padding:25,
      paddingTop:Platform.OS == 'ios' && 45,
      flex:1,
      backgroundColor:Colors.WHITE
    }}>

      <Header/>  
      {courseList?.length == 0 ?
       <NoCourse/> :
       <View>
        <PraticeSection/>
        <CourseList courseList={courseList}/>
        </View>
        }
    </View>
  )
}