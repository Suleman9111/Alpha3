import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Modal,
    Button,
    TouchableOpacity,
    Dimensions
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getUserId, getUserEmail } from "../Tabs/userData";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIconss from 'react-native-vector-icons/EvilIcons';
import EvilIconsss from 'react-native-vector-icons/MaterialCommunityIcons';


const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;

const Message = ({ route, navigation }) => {

    const [messages, setMessages] = useState();
    const [sentMessages, setsentMessages] = useState([]);

    //Props data
    const userEmail = getUserEmail();
    const userId = getUserId();

    const { itemId } = route.params;
    const senderId = userId;
    const sendername = userEmail;
    console.log(senderId);




    //Chat Room
    const receiverId = itemId._id;
    const receiverName = itemId.email;

    const isSent = senderId === receiverId;

    const makingId =
        senderId.substring(senderId.length - 4) +
        receiverId.substring(receiverId.length - 4);
    const chatId = makingId.split("").sort().join("");

    const nothing = () => {
        console.log("Seacr pressed")
    }


    //------------------------------------- Sending Message to Backend------------------
    const handleSendMessage = async () => {

        //If textfield is empty leave the function
        // if (!setMessages.trim()) {
        //   // If user input is empty, do nothing
        //   return;
        // } setMessages("");
        setMessages("");

        const response = await fetch("http://192.168.1.5:3000/userchat", {
            method: "POST",
            body: JSON.stringify({
                username: itemId.email,
                userId: itemId._id,
                messages: messages,
                senderId: senderId,
                chatId: chatId,
                sendername: sendername,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const sendData = await response.json();

        setMessages("");
    };

    //------------------------------------- Displaying Message from Backend------------------

    const displayChat = async () => {

        const response = await fetch("http://192.168.1.3:3000/chats", {
            method: "POST",
            body: JSON.stringify({
                username: itemId.email,
                userId: itemId,
                messages: messages,
                senderId: senderId,
                chatId: chatId,
                sendername: sendername,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const receiveData = await response.json();
        setsentMessages(receiveData);

    };

    useEffect(() => {
        displayChat();
    });

    //------------------------------------- Render item ------------------

    const renderItem = ({ item }) => (

        <View style={{ backgroundColor: '#E4E3E3', }}>
            {senderId === item.senderId ? (

                <View>
                    <TouchableOpacity keyExtractor={item._id}
                        style={{
                            alignSelf: 'flex-start',
                            backgroundColor: 'green',
                            borderRadius: 20,
                            height: screenHeight * 0.08,
                            width: screenWidth * 0.7,
                            marginLeft: screenWidth * 0.05,
                            marginTop: screenHeight * 0.01,
                            justifyContent: "center",
                        }}
                        onPress={() => ""}>
                        <Text
                            style={{
                                borderColor: "#36ADEC",
                                fontWeight: '500',
                                marginLeft: screenWidth * 0.04,
                                color: "white"

                            }}
                        >
                            {item.messages}
                        </Text>

                    </TouchableOpacity>
                    <Text style={{ alignSelf: "flex-start", fontWeight: '600', marginTop: screenHeight * 0.005, marginLeft: screenHeight * 0.02 }}>{item.sendername}</Text>

                </View>

            ) : (
                <View>
                    <TouchableOpacity keyExtractor={item._id}
                        style={{
                            alignSelf: 'flex-end',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            height: screenHeight * 0.08,
                            width: screenWidth * 0.7,
                            marginRight: screenWidth * 0.05,
                            marginTop: screenHeight * 0.01,
                            justifyContent: "center",
                        }}
                        onPress={() => ""}>
                        <Text
                            style={{
                                borderColor: "#36ADEC",
                                fontWeight: '500',
                                marginLeft: screenWidth * 0.04

                            }}
                        >
                            {item.messages}
                        </Text>


                    </TouchableOpacity>
                    <Text style={{ alignSelf: "flex-end", marginRight: screenWidth * 0.07, fontWeight: '600', marginTop: screenHeight * 0.005 }}>{item.sendername}</Text>
                </View>

            )}
        </View >



    );

    //------------------------------------- Return------------------

    return (
        <View style={{ backgroundColor: "green", flex: 1, }}>
            <View style={{ backgroundColor: "green", width: screenWidth, alignItems: 'center', justifyContent: 'center', marginBottom: screenHeight * 0.07 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "white", marginTop: screenHeight * 0.07 }}>

                    {receiverName}
                </Text>
            </View>

            <View style={{ backgroundColor: '#E4E3E3', borderRadius: 20, width: screenWidth, height: screenHeight * 0.9 }}>
                <View style={{ height: screenHeight * 0.7, marginTop: screenHeight * 0.02 }}>

                    {sentMessages.length > 0 ? (
                        <FlatList
                            data={sentMessages}
                            renderItem={renderItem}
                            keyExtractor={(sentMessages) => sentMessages._id}
                        />

                    ) : (
                        <Text>No records found</Text>
                    )}

                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: screenHeight * 0.01, marginBottom: screenHeight * 0.05 }}>
                    <View style={{ alignItems: "center", marginLeft: screenWidth * 0.07, height: screenHeight * 0.0699, borderRadius: 10, backgroundColor: '#F5F5F5', width: screenWidth * 0.85, flexDirection: "row", justifyContent: "space-evenly" }}>
                        <TextInput placeholderTextColor={"#8D8D8D"} style={{ padding: screenHeight * 0.015, fontSize: 15, backgroundColor: "#F5F5F5", width: screenWidth * 0.59, height: screenHeight * 0.05 }} value={messages}
                            onChangeText={(text) => setMessages(text)}
                            placeholder="Type your message..." />
                        <TouchableOpacity onPress={handleSendMessage} style={{ backgroundColor: 'green', borderRadius: 20, alignItems: "center", justifyContent: "center", height: screenHeight * 0.04, width: screenWidth * 0.09 }}>
                            <EvilIconsss name="send" size={25} color="white" />

                        </TouchableOpacity>


                    </View>



                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },

    displayedText: {
        marginTop: 20,
        fontSize: 18,
    },
    messageContainer: {
        // padding: 8,
        //marginVertical: 4,
        maxWidth: '80%',
        borderRadius: 8,
    },

    sent: {
        alignSelf: 'flex-end',
        backgroundColor: 'green',
        marginRight: screenWidth * 0.04,
        marginTop: screenHeight * 0.015

    },
    received: {
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        marginLeft: screenWidth * 0.04,
        marginTop: screenHeight * 0.015

    },
    message: {
        fontSize: 16,
        color: 'black',
    },
});

export default Message;
