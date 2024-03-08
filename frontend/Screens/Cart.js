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
import { getUserId, getUserEmail } from "../Tabs/userData";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;

const Cart = ({ route, navigation }) => {
    const userEmail = getUserEmail();
    const userId = getUserId();
    const creatorId = userId;
    const [displayCart, setdisplayCart] = useState([]);
    const [price, setprice] = useState("");

    const itemPrices = displayCart.map((item) => item.price);

    const priceSum = displayCart.reduce((acc, item) => acc + item.price, 0);

    //--------------------------------CART ITEMS--------------------------------------------

    const displayCartItems = async () => {


        const response = await fetch("http://192.168.1.3:3000/displayCart", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,

            }),
            headers: { "Content-Type": "application/json" },
        });
        const receiveData = await response.json();
        setdisplayCart(receiveData);

    };

    useEffect(() => {
        displayCartItems();
        console.log("cart")
    });

    //--------------------------------RENDER ITEMS--------------------------------------------
    const renderItem = ({ item }) => (
        <View>
            <View
                style={{
                    marginTop: screenHeight * 0.02,
                    borderRadius: 12,
                    backgroundColor: "#FFFFFF",
                    width: screenWidth * 0.9,
                    height: screenHeight * 0.08,
                    marginLeft: screenHeight * 0.02,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: 'space-evenly',
                }}
            >
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                <Text style={{ fontSize: 20 }}>
                    ${item.price}
                </Text>
            </View>
        </View>
    );

    //--------------------------------EMPTY CART --------------------------------------------

    const emptyCart = async () => {
        const response = await fetch("http://192.168.1.3:3000/emptyCart", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data6 = await response.json();
    };

    //--------------------------------------- R E T U R N -------------------------------------------

    return (
        <View style={{ backgroundColor: "#D0D3D4", flex: 1 }}>

            <View>
                {displayCart.length > 0 ? (
                    <View>
                        <FlatList
                            data={displayCart}
                            renderItem={renderItem}
                            keyExtractor={(displayCart) => displayCart._id}
                        />
                        <View
                            style={{
                                backgroundColor: "#2FDBDE",
                                height: screenHeight * 0.09,
                                position: "absolute",
                                width: screenWidth * 0.9,
                                marginLeft: screenWidth * 0.045,
                                borderRadius: 15,
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                marginTop: screenHeight * 0.78
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                Total : ${priceSum}
                            </Text>
                            <View style={{ backgroundColor: "#1D31B1", borderRadius: 10 }}>
                                <TouchableOpacity onPress={emptyCart}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: "bold",
                                            color: "white",
                                            padding: 10,
                                        }}
                                    >
                                        Checkout
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: screenHeight * 0.35 }}>
                        <Text style={{ fontSize: 22 }}>Your Cart is Empty </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Cart;

