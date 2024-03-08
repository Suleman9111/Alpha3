import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Modal,
    Button,
    TouchableOpacity,
    Dimensions, Image
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getUserId, getUserEmail } from "../Tabs/userData";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIconss from 'react-native-vector-icons/EvilIcons';
import EvilIconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from "./Cart";



const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;

const Stack = createNativeStackNavigator();



const Discover = ({ route, navigation }) => {

    const [product, setproduct] = useState([])
    const userEmail = getUserEmail();
    const userId = getUserId();
    const [cartItems, setcartItems] = useState()


    const nothing = () => {
        console.log("Seacr pressed")
    }

    //-----------------------------Display Products ---------------------------------------------

    const displayImage = async () => {
        const response = await fetch("http://192.168.1.3:3000/displayProducts", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data1 = await response.json();
        setproduct(data1);
    };

    useEffect(() => {
        displayImage();
    })

    //-----------------------------Render Items ---------------------------------------------


    const renderItem = ({ item }) => (
        <View style={{ height: screenHeight * 0.32, width: screenWidth * 0.5, backgroundColor: "white" }}>



            <View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginLeft: screenWidth * 0.06, backgroundColor: "#F5F5F5", width: screenWidth * 0.4, marginTop: screenHeight * 0.02, height: screenHeight * 0.2, borderRadius: 10, elevation: 5, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 3 } }}>
                        <Image source={{ uri: item.imageUrl }} style={{ width: '80%', height: '80%' }} resizeMode='contain' />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                        <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 18, marginTop: screenHeight * 0.01, fontWeight: "600" }}>{item.name}</Text>
                        <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 17, marginTop: screenHeight * 0.01 }}>${item.price}</Text>

                    </View>
                </View>
                <TouchableOpacity onPress={() => addToCart(item.name, item.price)} keyExtractor={item._id} style={{ marginLeft: screenWidth * 0.06, marginTop: screenHeight * 0.008, backgroundColor: "green", width: screenWidth * 0.25, height: screenHeight * 0.04, borderRadius: 8, alignItems: "center", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "white" }}>Buy Now</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

    //-----------------------------Add Item to Cart ---------------------------------------------
    const addToCart = async (name, price) => {
        const response = await fetch("http://192.168.1.3:3000/cart", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                price: price,

                userId: userId,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data4 = await response.json();

        setcartItems(data4);
    };

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: screenHeight * 0.01, marginBottom: screenHeight * 0.02 }}>
                    <View style={{ alignItems: "center", marginLeft: screenWidth * 0.07, height: screenHeight * 0.06, borderRadius: 10, backgroundColor: '#E4E3E3', width: screenWidth * 0.7, flexDirection: "row", justifyContent: "space-evenly" }}>
                        <TextInput placeholderTextColor={"#8D8D8D"} style={{ padding: screenHeight * 0.015, fontSize: 15, backgroundColor: "#E4E3E3", width: screenWidth * 0.59, height: screenHeight * 0.05 }} placeholder='Search Furniture' />
                        <TouchableOpacity >
                            <EvilIconss name="search" size={45} />

                        </TouchableOpacity>


                    </View>
                    <View>
                        <TouchableOpacity onPress={
                            () =>
                                navigation.navigate("Cart")
                        } style={{ width: screenWidth * 0.17, marginLeft: screenWidth * 0.02, height: screenHeight * 0.06, borderRadius: 10, backgroundColor: "#114232", alignItems: "center", justifyContent: "center" }}>
                            <Icon name="shopping-cart" size={35} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>
                <Text style={{ marginLeft: screenWidth * 0.05, fontSize: 30 }}>Explore</Text>
                <Text style={{ marginLeft: screenWidth * 0.05, fontSize: 20 }}>Best Trending Furmiture</Text>
                <View style={{ height: screenHeight * 0.72 }}>
                    <FlatList
                        data={product}
                        renderItem={renderItem}
                        keyExtractor={(product) => product._id}
                        numColumns={2}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Discover