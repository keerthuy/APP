import { View, Text, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Button from './../Shared/Button';

export default function NoCourse() {
  const router = useRouter(); // Correct usage

  return (
    <View 
      style={{
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('./../../assets/images/book.png')}
        style={{
          height: 200,
          width: 200,
        }}
      />
      <Text
        style={{
          fontFamily: 'outfitBold',
          fontSize: 25,
          textAlign: 'center',
        }}
      >
        You Don't Have Any Course
      </Text>

      <Button text={'+ Create New Course'} onPress={() => router.push('/addCourse')} />
      <Button text={'Explore Existing Courses'} type="outline" />
    </View>
  );
}
