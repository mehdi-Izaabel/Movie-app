import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from "../component/Search";
import FilmDetails from "../component/FilmDetails"
import FilmInfo from "../component/FilmInfo";


const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Search}
                options={{title:"Search"}}
            />
            <Stack.Screen
                name="ListFilm"
                component={FilmInfo}
                options={{title:"List Film"}}
            />
            <Stack.Screen
                name="Details"
                component={FilmDetails}
                options={{title:"Details Movie"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
