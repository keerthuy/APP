import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../../constant/Colors'
import Button from '../../components/Shared/Button';
import Prompt from '../../constant/Prompt';
import { GenerateTopicsAIModel } from '../../Config/AiModel';
import { dp } from './../../Config/firebaseConfig'
import { UserDetailContext } from './../../context/UserDetailContext'
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';

export default function AddCourse() {
    const [loading, setLoading] = useState(false);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [userInput, setUserInput] = useState();
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState([]);
    const router = useRouter();

    const onGererateTopic = async () => {
        setLoading(true);
        const PROMPT = userInput + Prompt.IDEA;
        try {
            const aiResp = await GenerateTopicsAIModel.sendMessage(PROMPT);
            const topicIdea = JSON.parse(aiResp.response.text());
            console.log('Generated Topics:', topicIdea);
            setTopics(topicIdea?.course_titles);
        } catch (error) {
            console.error('Error generating topics:', error);
        } finally {
            setLoading(false);
        }
    }

    const onTopicSelect = (topic) => {
        const isAlreadyExist = selectedTopic.find((item) => item == topic);
        if (!isAlreadyExist) {
            setSelectedTopic(prev => [...prev, topic]);
        } else {
            const topics = selectedTopic.filter((item) => item !== topic);
            setSelectedTopic(topics);
        }
    }

    const isTopicSelected = (topic) => {
        const selection = selectedTopic.find(item => item == topic);
        return selection ? true : false;
    }

    // Use to generate course using AI model
    const onGenerateCourse = async () => {
        setLoading(true);
        const PROMPT = selectedTopic + Prompt.COURSE;
        try {
            const aiResp = await GenerateTopicsAIModel.sendMessage(PROMPT);
            const resp = JSON.parse(aiResp.response.text());
            const courses = resp.courses;
            console.log('Generated Courses:', courses);
            // Save Course info to Database
            courses?.forEach(async (course) => {
                const courseData = {
                    ...course,
                    createdOn: new Date(),
                    createdBy: userDetail?.email,
                };
                console.log('Saving course:', courseData);
                await setDoc(doc(dp, 'Courses', Date.now().toString()), courseData);
            });
            router.push('/(tabs)/home');
        } catch (error) {
            console.error('Error generating courses:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ScrollView
            style={{
                padding: 25,
                backgroundColor: Colors.WHITE,
                flex: 1
            }}>
            <Text style={{
                fontFamily: 'outfitBold',
                fontSize: 30
            }}>
                Create New Course
            </Text>
            <Text
                style={{
                    fontFamily: 'outfit',
                    fontSize: 30
                }}
            >
                What you want to learn today?
            </Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 20,
                marginTop: 8,
                color: Colors.GRAY
            }}>
                Write what course you want to create EX.learn
                React Js Digital Marketing Guide,10th Science
                Chapter
            </Text>
            <TextInput
                placeholder='(EX.Learn Python,Learn 12th chemistry)'
                style={styles.textInput}
                numberOfLines={3}
                multiline={true}
                onChangeText={(value) => setUserInput(value)}
            />
            <Button
                text={'Generate Topic'}
                type='outline'
                onPress={() => onGererateTopic()} loading={loading} />
            <View
                style={{
                    marginTop: 15,
                    marginBottom: 10
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 20
                    }}
                >Select topics which you want to add in the course</Text>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 10,
                        marginTop: 6
                    }}>
                    {topics.map((item, index) => (
                        <Pressable key={index} onPress={() => onTopicSelect(item)}>
                            <Text style={{
                                padding: 7,
                                borderWidth: 0.4,
                                borderRadius: 99,
                                paddingHorizontal: 15,
                                backgroundColor: isTopicSelected(item) ? Colors.PRIMARY : null,
                                color: isTopicSelected(item) ? Colors.WHITE : Colors.PRIMARY
                            }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
            {selectedTopic?.length > 0 && <Button text='Generate Course'
                onPress={() => onGenerateCourse()}
                loading={loading}
            />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        height: 100,
        marginTop: 10,
        alignItems: 'flex-start',
        fontSize: 18,
    }
});