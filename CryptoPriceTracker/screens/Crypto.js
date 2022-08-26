import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CryptoCard from "../components/CryptoCard";

const Crypto = ({navigation, route}) => {

    const [coins, setCoins] = useState([]);
    const [arr, setArr] = useState([])

    useEffect(() =>{  
        getCoins();

    }, []);

    function getCoins() {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, {
                headers:{
                  "Content-Type": "application/json",
                },
            }).then(function(response){ 
                // Storing images to data array 
                    setCoins(response.data);
                    let data = [];
                    for (var i = 0; i < response.data.length; i++) {
                      data.push(response.data[i])
                    }
  
                    setArr(data)
  
  
            }).catch(function(error){
                console.log(error)
            })
    }

    console.log(arr)

    return (
        <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.largeTitle}>Markets</Text>
        </View>
        <View style={styles.divider}/>

        <CryptoCard/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  largeTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  titleWrapper:{
    marginTop:80,
    paddingHorizontal:16
  },
  divider:{
    height: 1,
    backgroundColor:'#d3d3d3',
    marginLeft:16,
    marginRight:16,
    marginTop:16
  }
});

export default Crypto;


