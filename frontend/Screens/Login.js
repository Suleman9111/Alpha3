

import { View, Text, Button, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../Tabs/Tabs';
import HomeScreen from './HomeScreen';
import Chat from './Chat';
import { setUser } from '../Tabs/userData';
import { useNavigation } from "@react-navigation/native";




const Stack = createNativeStackNavigator();
const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;

const Login = () => {

    const navigation = useNavigation();

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        );
    };

    //------------------------------------- Calculate Font Size--------------------------------

    const calculateFontSize = (size) => {
        // Adjust this ratio as needed
        const ratio = Math.sqrt(screenHeight * screenHeight) / 100;
        return Math.round(size * ratio);
    };



    //------------------------------------- Sign In with Mongodb --------------------------------

    const signInWithMongodb = async (Chat) => {

        try {
            const response = await fetch("http://192.168.1.3:3000/demo", {
                method: "POST",
                body: JSON.stringify({ email: email, password: password }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            console.log(data);
            console.log("date  has come")
            // const { userEmail, userId } = data;
            const userEmail = data.email;
            const userId = data._id;


            setUser(userEmail, userId);

            if (email != "" || password != "") {
                if (data.password === password) {



                    navigation.navigate("Tabs", { data: data, userEmail: data.email, userId: data._id });
                    console.log("User Email is", data.email);
                } else {

                    Alert.alert(
                        'Incorrect Password',
                        'Please enter the correct password.',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') }
                        ],
                        { cancelable: false }
                    );

                }
            } else {
                console.log("Please Enter your email and password");
            }
        }
        catch (error) { console.log(error) }

    };

    return (

        <View style={{ alignItems: 'center', flex: 1 }}>

            <Image source={require('../assets/cirlce.png')} style={{ position: 'absolute', height: screenHeight, width: screenWidth }} />

            <View style={{ marginTop: screenHeight * 0.25 }}>

                <View style={style.card}>

                    <Text style={{ marginTop: screenHeight * 0.03, fontSize: calculateFontSize(4.3) }}>Welcome back!</Text>
                    <Text style={{ marginTop: screenHeight * 0.01, fontSize: 20 }}>You have been Missed.</Text>

                    <TextInput
                        style={style.input}
                        onChangeText={(text) => setemail(text)}
                        placeholder="Email"
                        placeholderTextColor={"#8D8D8D"}

                    ></TextInput>

                    <TextInput
                        style={style.input}
                        onChangeText={setPassword}
                        placeholder="Password" secureTextEntry={true}
                        placeholderTextColor={"#8D8D8D"}
                    ></TextInput>

                    <Text style={{ marginLeft: screenWidth * 0.4, marginTop: screenHeight * 0.01 }}>Forgot Password?</Text>

                    <TouchableOpacity onPress={() => signInWithMongodb("Tabs")} style={style.button}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>Login</Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: screenHeight * 0.01, fontSize: 18 }}>Or</Text>

                    <TouchableOpacity onPress={() => signinWithFirebase("HomePage")} style={style.button}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: "white" }}>Sign in with Google</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: screenHeight * 0.05, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18 }}>Don't have an account?  </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#7479F1', fontSize: 20, textDecorationLine: 'underline', fontWeight: '500' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>


    )
}
const style = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    card: {

        borderColor: 'white', backgroundColor: '#F8F9FF', borderRadius: 15,
        borderWidth: 2, width: screenWidth * 0.8, height: screenHeight * 0.6,
        alignItems: 'center', elevation: 5, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 3 }
    },
    input: {
        width: screenWidth * 0.7,
        height: screenHeight * 0.07,
        // marginLeft:50,
        marginTop: screenHeight * 0.03,
        borderWidth: 2,
        color: "black",
        padding: 10,
        borderColor: "#FBF7F7",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        // marginBottom: 10,

        fontSize: 20,
        fontWeight: "100",
        paddingLeft: 20,
        fontSize: 20, fontWeight: '300',
    },
    button: {
        backgroundColor: '#2CBB1F',
        width: screenWidth * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight * 0.05,
        borderRadius: 10,
        marginTop: screenHeight * 0.015,

    },

}
);

export default Login