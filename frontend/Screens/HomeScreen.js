import { View, Text, Image, Button, SafeAreaView, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons22 from 'react-native-vector-icons/MaterialIcons';
import EvilIconss from 'react-native-vector-icons/EvilIcons';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;

const HomeScreen = () => {


    const [findProduct, setfindProduct] = useState("")

    const getting = async () => {
        console.log(":Butotn pressed")
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{}}>
                {/* //Top */}

                <View>
                    <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 18, marginBottom: screenHeight * 0.001, color: "#8D8D8D" }}>
                        Location
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Icon style={{ marginLeft: screenWidth * 0.06 }} name="location-dot" size={25} color="#114232" />
                        <Text style={{ marginLeft: screenWidth * 0.02, fontSize: 20 }}>New York, USA</Text>
                        <TouchableOpacity onPress={getting} style={{ marginLeft: screenWidth * 0.4, borderRadius: 100 }}>
                            <MaterialCommunityIcons22 name="circle-notifications" size={45} color="#114232" />
                        </TouchableOpacity>

                    </View>

                </View>

                {/* Search and filter */}

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: screenHeight * 0.02 }}>
                    <View style={{ alignItems: "center", marginLeft: screenWidth * 0.06, height: screenHeight * 0.06, borderRadius: 10, backgroundColor: '#F5F5F5', width: screenWidth * 0.7, flexDirection: "row" }}>
                        <TextInput placeholderTextColor={"#8D8D8D"} style={{ padding: screenHeight * 0.015, fontSize: 15, backgroundColor: "#F5F5F5", width: screenWidth * 0.59, height: screenHeight * 0.05 }} placeholder='Search Furniture' />
                        <TouchableOpacity onPress={getting}>
                            <EvilIconss name="search" size={45} />

                        </TouchableOpacity>


                    </View>

                    <View>
                        <TouchableOpacity style={{ width: screenWidth * 0.17, marginLeft: screenWidth * 0.02, height: screenHeight * 0.06, borderRadius: 10, backgroundColor: "#114232", alignItems: "center", justifyContent: "center" }}>
                            <Icon name="sliders" size={35} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>




                {/* COllection box */}

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginLeft: screenWidth * 0.06, backgroundColor: "#F5F5F5", width: screenWidth * 0.88, marginTop: screenHeight * 0.04, height: screenHeight * 0.2, borderRadius: 10, elevation: 5, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 3 } }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: screenHeight * 0.01 }}>New Collection</Text>
                        <Text style={{ marginBottom: screenHeight * 0.005 }}>Discount 50% for</Text>
                        <Text style={{ marginBottom: screenHeight * 0.02 }}>the first Transaction</Text>
                        <TouchableOpacity style={{ width: screenWidth * 0.26, backgroundColor: "#114232", height: screenWidth * 0.075, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: "white" }}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/triall-a796b.appspot.com/o/Categories%2Fsofa.png?alt=media&token=33f0a8ec-d7a6-4c21-87a1-ec3244e00180" }} style={{ width: screenWidth * 0.32, height: screenHeight * 0.15 }} />
                </View>


                <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-around', marginTop: screenHeight * 0.03 }}>
                    <Text style={{ fontSize: 22, fontWeight: "600", }}>Category</Text>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: screenWidth * 0.34, fontSize: 22, fontWeight: "600", fontSize: 14, color: '#8D8D8D' }}>See All</Text>

                    </TouchableOpacity>
                </View>

                {/* Category icons */}
                <View style={{ marginTop: screenHeight * 0.02, flexDirection: "row", alignItems: 'center', justifyContent: "space-evenly" }}>
                    <TouchableOpacity style={{ width: screenWidth * 0.18, height: screenHeight * 0.08, borderRadius: 500, backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                        <MatIcons name='sofa-single' size={40} color='#114232' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: screenWidth * 0.18, height: screenHeight * 0.08, borderRadius: 500, backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                        <Icon name='chair' size={40} color='#114232' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: screenWidth * 0.18, height: screenHeight * 0.08, borderRadius: 500, backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                        <MatIcons name='lamp' size={40} color='#114232' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: screenWidth * 0.18, height: screenHeight * 0.08, borderRadius: 500, backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                        <MatIcons name='bed-king' size={40} color='#114232' />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: screenHeight * 0.01, flexDirection: "row", alignItems: 'center' }}>
                    <TouchableOpacity style={{}}>
                        <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: screenWidth * 0.11 }}>Sofa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: screenWidth * 0.15 }}>Chair</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: screenWidth * 0.135 }}>Lamp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: screenWidth * 0.15 }}>Bed</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: screenHeight * 0.02, marginLeft: screenWidth * 0.066 }}>Flash Sale</Text>




                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginLeft: screenWidth * 0.06, backgroundColor: "#F5F5F5", width: screenWidth * 0.4, marginTop: screenHeight * 0.02, height: screenHeight * 0.2, borderRadius: 10, elevation: 5, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 3 } }}>
                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/triall-a796b.appspot.com/o/Categories%2Fchair-png-40525.png?alt=media&token=7456adb7-cc5c-4be8-9593-0f925ab7b60b" }} style={{ width: '80%', height: '80%' }} resizeMode='contain' />
                        </View>
                        <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 17, marginTop: screenHeight * 0.01 }}>Arm Chair</Text>
                        <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 17, marginTop: screenHeight * 0.01 }}>180$</Text>

                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginLeft: screenWidth * 0.06, backgroundColor: "#F5F5F5", width: screenWidth * 0.4, marginTop: screenHeight * 0.02, height: screenHeight * 0.2, borderRadius: 10, elevation: 5, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 3 } }}>
                            <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/triall-a796b.appspot.com/o/Categories%2Fchair.png?alt=media&token=93cc961b-ad4e-40df-ab3a-8abc925f5a5d' }} style={{ width: '80%', height: '80%' }} resizeMode='contain' />
                        </View>
                        <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 17, marginTop: screenHeight * 0.01 }}>Sofa Chair</Text>
                        <Text style={{ marginLeft: screenWidth * 0.06, fontSize: 17, marginTop: screenHeight * 0.01 }}>190$</Text>

                    </View>
                </View>




            </View>

        </SafeAreaView >
    );
}

export default HomeScreen