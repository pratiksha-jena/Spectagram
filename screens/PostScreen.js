import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PostScreen extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text>PostScreen</Text>
            </View>
        );
    }
}