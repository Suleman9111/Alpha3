import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Chat from '../Screens/Chat';
import Featherr from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import Login from '../Screens/Login';
import { useNavigation } from '@react-navigation/native';
import Discover from '../Screens/Discover';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Shop from 'react-native-vector-icons/FontAwesome5';
import Profile from '../Screens/Profile';




const screenDimensions = Dimensions.get("screen");
const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;



const Tab = createBottomTabNavigator();




const Tabs = () => {
    const navigation = useNavigation();

    const onPressNavigate = () => {
        console.log("Button pressed")

        navigation.navigate('Chat', { dataa: 86 });
    };
    return (
        <Tab.Navigator initialRouteName="Home"
            safeAreaInsets={{ bottom: 0 }}
            screenOptions={{

                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'black',
                    position: "absolute", height: screenHeight * 0.08,
                    marginBottom: screenHeight * 0.01, width: screenWidth * 0.9,
                    borderRadius: 98, marginLeft: screenWidth * 0.045, shadowColor: 'black', elevation: 0
                }

            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: focused ? 'white' : "black", borderRadius: 200, width: screenWidth * 0.13, height: screenHeight * 0.06 }}>
                        <Featherr style={{}} name="home" size={35} color={focused ? "green" : "white"} />
                    </View>
                )
            }} />
            <Tab.Screen name="Discover" component={Discover} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: focused ? 'white' : "black", borderRadius: 200, width: screenWidth * 0.13, height: screenHeight * 0.06 }}>
                        <Shop style={{}} name="shopping-bag" size={35} color={focused ? "green" : "white"} />
                    </View>
                )

            }} />
            <Tab.Screen name="Chat" component={Chat} options={{
                // tabBarButton: (props) => <TouchableOpacity onPress={console.log("butotn pressed")} {...props} />,
                headerStyle: {
                    backgroundColor: "#2d6a4f", elevation: 0, // Remove shadow on Android
                    shadowOpacity: 0, borderBottomWidth: 0, // Remove bottom border line
                },
                headerTitleStyle: {
                    fontWeight: '500',
                    fontSize: 25, color: "white"
                },
                headerShown: true,

                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: focused ? 'white' : "black", borderRadius: 200, width: screenWidth * 0.13, height: screenHeight * 0.06 }}>
                        <Icons style={{}} name="chatbox-ellipses" size={35} color={focused ? "green" : "white"} />
                    </View>
                )

            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#2CBB1F", elevation: 0, // Remove shadow on Android
                    shadowOpacity: 0, borderBottomWidth: 0,  // Remove bottom border line
                }, headerTitleStyle: { fontSize: 24, color: "white" },
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: focused ? 'white' : "black", borderRadius: 200, width: screenWidth * 0.13, height: screenHeight * 0.06 }}>
                        <Iconss style={{}} name="user" size={35} color={focused ? "green" : "white"} />
                    </View>
                )

            }} />
        </Tab.Navigator>
    )
}

export default Tabs