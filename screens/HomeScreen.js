import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class HomeScreen extends Component {
    render() {
        return(
        <View style={styles.container}>
             <View style={styles.appTitle}>
          <Image
          source={require('../assets/app_icon.png')}
          style={styles.appIcon}
          ></Image>
          
        </View> 
         <TouchableOpacity style={styles.buttons}>
            <Text style={styles.button_text}>Counselling</Text>
             <Ionicons name="chevron-forward-circle-outline" size={24} color="black" style={styles.icon1} />
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttons}>
            <Text style={styles.button_text}>Motivational Quotes</Text>
            <Ionicons name="chevron-forward-circle-outline" size={24} color="black" style={styles.icon1} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttons}>
            <Text style={styles.button_text}>Motivational Videos</Text>
            <Ionicons name="chevron-forward-circle-outline" size={24} color="black" style={styles.icon1} />
         </TouchableOpacity>
        </View>    
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#365B6D",
      },
      droidSafeArea: {
        marginTop:
          Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
      },
      appTitle: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center",
      },
      appIcon: {
        width: RFValue(175),
        height: RFValue(175),
        resizeMode: "contain",

      },
      appTitleText: {
        color: "white",
        textAlign: "center",
        fontSize: RFValue(40),
        
      },
      buttons: {
        borderRightColor: "#41C1BA",
        borderBottomColor: "#41C1BA",
        borderBottomWidth: 5,
        borderRightWidth:5,
        borderRadius:20,
        width:RFValue(300),
        height:RFValue(125),
        marginLeft:RFValue(50),
        backgroundColor:"white",
        padding:RFValue(20),
        marginTop:RFValue(25),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }, 
      button_text: {
        fontSize:RFValue(25),
        fontWeight:"bold",
        color:"#c44c48"
      },
      icon1: {
          marginLeft:RFValue(100)
      }

})