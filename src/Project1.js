import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Project1 = ()=>
{
    return (
        <View style={
          Mystyle.Viewstyle
        }>
            <Text style={Mystyle.TextStyle}> Hello World </Text>
        </View>
    );
}
var Mystyle = StyleSheet.create(
  {
    Viewstyle:{
    width:100,
    height:100,
    backgroundColor:'aqua',
    alignItems:'center',
    justifyContent:'center',
    },
    TextStyle:
    {
      color:'black'
    }
    
  }
)

export default Project1;