import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import { About, MenuItem, ViewCart } from "../components";

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{
                marginLeft: 20
            }} />
            <MenuItem restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>)
}