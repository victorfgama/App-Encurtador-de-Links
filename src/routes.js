import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './pages/Home'
import MyLinks from './pages/MyLinks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator()

export default function routes() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#2ccbb9',
                activeTintColor: 'white',
                marginTop: 16,
                labelStyle: {
                    fontSize: 19
                }
            }}
        >

            <Drawer.Screen name="Home" component={Home}
                options={{
                    title: "Encurtar Links",
                    drawerIcon: ({ focused, size, color }) => <Icon name={!focused ? "cube-outline" : "cube"} size={size + 5} color={color} />
                }}
            />

            <Drawer.Screen name="MyLinks" component={MyLinks}
                options={{
                    title: "Meus Links",
                    drawerIcon: ({ focused, size, color }) => <Icon name={focused ? "link-box" : "link-box-outline"} size={size + 5} color={color} />
                }}
            />
        </Drawer.Navigator>
    )
}
