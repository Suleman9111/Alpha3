import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Modal,
    Alert,
    Image,
    TouchableOpacity, Dimensions
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import EvilIconss from 'react-native-vector-icons/EvilIcons';
import { getUserEmail, getUserId } from "../Tabs/userData";


const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;



import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

const Chat = ({ route, navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [form, setform] = useState({ email, password });
    const [users, setusers] = useState([]);
    const [ismodal, setismodal] = useState(false);

    const imagePath = require("../assets/chair.png");

    const userEmail = getUserEmail();
    const userId = getUserId();
    const imgg = require('../assets/chair.png')

    const nothing = () => {
        console.log("Seacr pressed")
    }

    const displayUsers = async () => {
        //handleLogin();
        const response = await fetch("http://192.168.1.3:3000/users", {
            method: "POST",
            body: JSON.stringify({
                email: userEmail,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();

        setusers(data);
    };

    useEffect(() => {
        displayUsers();
    });

    const renderItem = ({ item }) => (
        <View style={{ borderRadius: 20, alignItems: 'center' }}>
            <TouchableOpacity style={{ borderRadius: 30 }}
                keyExtractor={item._id}
                onPress={
                    () =>
                        navigation.navigate("Message", {
                            itemId: item,
                            senderId: userId,
                            sendername: userEmail,

                        })
                }
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginTop: screenHeight * 0.02,
                        width: screenWidth * 0.87, height: screenHeight * 0.085, padding: screenHeight * 0.005
                    }}
                >
                    <View style={{
                        borderRadius: 200 / 2, height: screenHeight * 0.075, width: screenWidth * 0.16, alignItems: "center", justifyContent: "center", marginLeft: screenWidth * 0.03
                    }}>
                        <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/triall-a796b.appspot.com/o/Categories%2F1707644300591?alt=media&token=995914fa-c1c8-42b6-855b-f17009ba5aca" }} style={{ width: '90%', height: '90%', borderRadius: 200 / 2 }} resizeMode="cover" />

                    </View>

                    <View style={{ flexDirection: "column", marginLeft: 30 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: screenHeight * 0.005 }}>{item.email}</Text>
                        <Text style={{ fontSize: 13 }}>Welcome!</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ backgroundColor: "#2d6a4f", flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: screenHeight * 0.03, marginBottom: screenHeight * 0.05 }}>
                <View style={{ alignItems: "center", marginLeft: screenWidth * 0.07, height: screenHeight * 0.06, borderRadius: 10, backgroundColor: '#F5F5F5', width: screenWidth * 0.85, flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TextInput placeholderTextColor={"#8D8D8D"} style={{ padding: screenHeight * 0.015, fontSize: 15, backgroundColor: "#F5F5F5", width: screenWidth * 0.59, height: screenHeight * 0.05 }} placeholder='Search Furniture' />
                    <TouchableOpacity onPress={nothing}>
                        <EvilIconss name="search" size={45} />

                    </TouchableOpacity>


                </View>



            </View>
            <View style={{ backgroundColor: "#F5F5F5", borderRadius: 20, flex: 2 }}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={(users) => users._id}
                />
            </View>
        </View>
    );
};

export default Chat;

