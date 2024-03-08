import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Matt from 'react-native-vector-icons/MaterialIcons';
import EvilIconss from 'react-native-vector-icons/EvilIcons';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Antt from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';



const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;


const Profile = () => {
    // Dummy user data
    const user = {
        name: 'Salman',
        email: 'salman@example.com',
        phoneNumber: '+1234567890',
    };

    // Dummy functions for settings, share, wishlist, and signout
    const handleSettings = () => {
        console.log('Settings pressed');
    };

    const handleShare = () => {
        console.log('Share pressed');
    };

    const handleWishlist = () => {
        console.log('Wishlist pressed');
    };

    const handleSignOut = () => {
        console.log('Sign Out pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={{ borderRadius: 50, height: screenWidth * 0.28, width: screenWidth * 0.29, alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={{ uri: "https://lh3.googleusercontent.com/pw/AP1GczMPP76f83VylIbiSFzMmTVOZBW9eVxGadlmBeNh73tPeSj9BF6O_cuUOrhg1W1ZhzQOup6S4F-DAb2bys6tk0lthpbdkN4SZXvICQKXRHd2H4DextFiDXEiO-3iiClAcWucSc-LOZJlJ4sX3yzO3S6gpSC-CiIopVcaXA70PgiCSX3p8Vde2Te5FI1SWxa-DKP5E9vT4nFg7FcwQ9uztxMDJt-pJBXkK8krScd4bgeI1IQwPLmv1WeV9itt3KysjnX2PRcALL93cFxhULtezZuN0Ak3WMnhAqJslBimhRx3soNKM4piBGudG8cX4OwSGCWNdBnQ4BccC4fR44VS-loZBJn4MKkZM0HxXrY4lA0QYv1jwlddvpeEBb2yi11-OvDpWxCe5Oj6D2XGJ1uy1ZWu66VUUzduRGLCD-4W3vzNHaHmNEyeLaujQUcPoyNphEZxGxpQvqXBMsCqZquVtZXfyMjP8Biase2xSYYOkNYJaeEukH0xjyP72R1DRWxV60Alh-VmFWWYj1ae67Kn5U-EL-ZjH6AzakDu-WIQ1s5Ub1YdFGWQZzy_-sepwYsPgcUlXATvqUIFYCZ2-KPNDX7BDDdg8MjjzqI8qWqLemDbh8jFB7OGHMc4fEF3NUVhF7UCDR2kre67LU2LHbjrzHAt_Zhjrpb9Ctt7yAaszfDs71ripontf1CE7-BwOeNQjQdl0ynDER1tZCHo0vsc8yMWTo42wfBOU3irZ4xdCtoKitJZNDsZdv4qHlz_1Gxd92-b5z_1EVSh_0RYWlgVoCmz0arMe2DARBjlRO6hWUoFE_TeHCRBLiQ8RYU9uIJhJnuZqQwRbL9r6uBXtgr1wVlXJipfHMkQm3AvyCmKUR3oQomtYCf6-RXaPhY11_6EgzAAq1dG15dDWDHfVMpKPAn3un8YzwCXgSd_5i7if37QuLMM_IoLR8KYz23zUw=w760-h1352-s-no-gm?authuser=0" }} style={{ width: '90%', height: '90%', borderRadius: 200 }} />
                </View>
                <Text style={styles.profileText}>{user.name}</Text>
                <Text style={styles.profileText}>{user.email}</Text>
                <Text style={styles.profileText}>{user.phoneNumber}</Text>
            </View>
            <View style={{}}>
                <View style={{ marginTop: screenHeight * 0.02 }}>
                    <TouchableOpacity onPress={""} style={{ borderRadius: 20, backgroundColor: '#EEEEEE', height: screenHeight * 0.09, width: screenWidth * 0.9, justifyContent: 'center', }}>
                        <View style={{ flexDirection: "row" }}>
                            <Antt style={{ marginLeft: screenWidth * 0.02 }} name="user" size={35} color="#114232" />
                            <View style={{ width: screenWidth * 0.38, justifyContent: "center", height: screenHeight * 0.04 }}>
                                <Text style={styles.text}>Your Profile</Text>

                            </View>
                            <Matt name="navigate-next" size={45} color="#114232" style={{ marginLeft: screenWidth * 0.3 }} />


                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: screenHeight * 0.02 }}>
                    <TouchableOpacity onPress={""} style={{ borderRadius: 20, backgroundColor: '#EEEEEE', height: screenHeight * 0.09, width: screenWidth * 0.9, justifyContent: 'center', }}>
                        <View style={{ flexDirection: "row" }}>
                            <Material style={{ marginLeft: screenWidth * 0.02 }} name="payment" size={35} color="#114232" />
                            <View style={{ width: screenWidth * 0.38, justifyContent: "center", height: screenHeight * 0.04 }}>
                                <Text style={styles.text}>Payment Methods</Text>
                            </View>
                            <Matt name="navigate-next" size={45} color="#114232" style={{ marginLeft: screenWidth * 0.3 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: screenHeight * 0.02 }}>
                    <TouchableOpacity onPress={""} style={{ borderRadius: 20, backgroundColor: '#EEEEEE', height: screenHeight * 0.09, width: screenWidth * 0.9, justifyContent: 'center', }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon style={{ marginLeft: screenWidth * 0.02 }} name="location-dot" size={35} color="#114232" />
                            <View style={{ width: screenWidth * 0.38, justifyContent: "center", height: screenHeight * 0.04 }}>
                                <Text style={styles.text}>Manage Address</Text>
                            </View>
                            <Matt name="navigate-next" size={45} color="#114232" style={{ marginLeft: screenWidth * 0.3 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: screenHeight * 0.02 }}>
                    <TouchableOpacity onPress={""} style={{ borderRadius: 20, backgroundColor: '#EEEEEE', height: screenHeight * 0.09, width: screenWidth * 0.9, justifyContent: 'center', }}>
                        <View style={{ flexDirection: "row" }}>
                            <Antt style={{ marginLeft: screenWidth * 0.02 }} name="setting" size={35} color="#114232" />
                            <View style={{ width: screenWidth * 0.38, justifyContent: "center", height: screenHeight * 0.04 }}>
                                <Text style={styles.text}>Setting</Text>
                            </View>
                            <Matt name="navigate-next" size={45} color="#114232" style={{ marginLeft: screenWidth * 0.3 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: screenHeight * 0.02 }}>
                    <TouchableOpacity onPress={""} style={{ borderRadius: 20, backgroundColor: '#EEEEEE', height: screenHeight * 0.09, width: screenWidth * 0.9, justifyContent: 'center', }}>
                        <View style={{ flexDirection: "row" }}>
                            <Material style={{ marginLeft: screenWidth * 0.02 }} name="logout" size={35} color="#114232" />
                            <View style={{ width: screenWidth * 0.38, justifyContent: "center", height: screenHeight * 0.04 }}>
                                <Text style={styles.text}>Logout</Text>
                            </View>
                            <Matt name="navigate-next" size={45} color="#114232" style={{ marginLeft: screenWidth * 0.3 }} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",

    },
    profileContainer: {
        alignItems: 'center',
        backgroundColor: "#2CBB1F", width: screenWidth,
        borderBottomLeftRadius: 200,
    },

    profileText: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',

    },


    text: {
        marginLeft: screenWidth * 0.02, fontSize: 18, fontWeight: "500"
    },
});

export default Profile;
