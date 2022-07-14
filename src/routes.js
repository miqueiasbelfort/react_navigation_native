import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Home from "./pages/Home"
import New from "./pages/New"
import Notification from "./pages/Notifications"
import Profile from "./pages/Profile"
import Search from "./pages/Search"

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
           }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="New" component={New}/>
            <Tab.Screen name="Notification" component={Notification}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

