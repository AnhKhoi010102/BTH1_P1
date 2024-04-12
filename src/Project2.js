import React from "react";
import {
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

export default  () => {
    return (
        <View style={MyStyle.container}>
            <TouchableOpacity style={MyStyle.Button} onPress={()=> alert("Xin chào Khôi")}>
                <Text style={MyStyle.text}>
                    Nhấn vào tôi đi
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const MyStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        },
        Button:{
            backgroundColor: "aqua",
            marginTop:10,
            margin: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        text:{
            color: "white",
            fontSize: 18
        }
    }
)