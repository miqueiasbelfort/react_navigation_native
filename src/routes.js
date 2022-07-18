import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Home from "./pages/Home"
import New from "./pages/New"
import Notification from "./pages/Notifications"
import Profile from "./pages/Profile"
import Search from "./pages/Search"

import ButtonNew from "./components/buttonNew"

import {Entypo, Feather} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <Tab.Navigator
           screenOptions={{
            tabBarStyle: {
                backgroundColor: "#121212",
                borderTopColor: "trasparent"
            },
            tabBarActiveTintColor: "#fff",
            tabBarItemStyle: {
                paddingBottom: 5,
                paddingTop: 5
            }
           }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search}
                options={{
                    tabBarIcon: ({ size, color}) => (
                        <Feather name="search" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="New" 
                component={New}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({size, color, focused}) => (
                        <ButtonNew size={size} color={color} focused={focused}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Notification" 
                component={Notification}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="notification" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

