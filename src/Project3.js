import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const Button = (props) => (
    <TouchableOpacity 
        onPress={props.onPress}
        style={{
            backgroundColor: '#ff637c',
            alignSelf:'center',
            padding: 10,
            margin: 10,
            ...props.buttonStyle,
        }}
    >
        <Text style={{color: '#fff'}}>{props.text}</Text>
    </TouchableOpacity>
);
export default () => (
    <View style ={{flex: 1, justifyContent: 'center' }}>
        <Button text="Say hello" onPress={() => alert("Hello")}/>
        <Button 
            text="Say goodbye" 
            onPress={() => alert("Goodbye")} 
            buttonStyle={{backgroundColor: '#4dc2c2'}} />
    </View>
)