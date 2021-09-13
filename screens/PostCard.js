import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue} from "react-native-responsive-fontsize";
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class PostCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

      componentDidMount(){

      }
    render(){
        return(
           <TouchableOpacity style={styles.container}
           onPress={()=>{
            this.props.navigation.navigate('PostScreen',{post:this.props.post})
          }}>
               <View style={styles.cardContainer}>
                   <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}>
                            </Image>
                        </View>
                        <View>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image
                        source={require("../assets/post.jpeg")} 
                        style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                    
                </View>
           </TouchableOpacity> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
      },
      authorContainer: {
        flex:0.1,
        flexDirection:'row'
      },
      authorImageContainer:{
          flex:0.15,
          justifyContent:'center',
          alignItems:'center'
      },
      profileImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
      },
      authorNameContainer:{
        flex:0.85,
        justifyContent:"center"
      },
      authorNameText: {
        fontSize: RFValue(25),
        fontFamily: "Bubblegum-Sans",
        color: "white"
      },
      postImage:{
        marginTop: RFValue(20),
        height: RFValue(275),
        alignSelf:'center',
        width:'100%'
      },
      captionContainer:{

    },
      captionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
      },
      actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
      },
      likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
      },
      likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      }
    });
    