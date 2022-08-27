import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';


const { width, height } = Dimensions.get("window");

const CryptoCard = ({item, data} ) => {

  return (
    <TouchableOpacity>
        <View style={styles.cardView}>
          {/* Left view here */}
          <View style={styles.rowContainer}>
            <View style={styles.coinName}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.columnContainer}>
                <Text style={styles.itemSubName}>{item.name}</Text>
                <Text style={styles.itemSubTitleSymbol}>{item.symbol}</Text>
              </View>
            </View>
          </View>

           {/* Right view here */}
          <View style={styles.dockLeft}>
            <View style={styles.rowContainer}>
              <Text style={styles.itemTitle}>${item.current_price}</Text>
            </View>
            <View style={styles.rowContainer}>
              {
                item.price_change_percentage_24h < 0 ?(
                  <Text style={styles.itemTitleRed}>{item.price_change_percentage_24h}%</Text>
                )
                :
              <Text style={styles.itemTitleGreen}>{item.price_change_percentage_24h}%</Text>
              }

            </View>
          </View>


        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    padding: 5,
    height: 80,
    marginTop: 2,
    marginStart: 1,
    marginEnd: 1,
    flexDirection:'row'
  },
  rowContainer: {
    flexDirection: "row",
    flex:1
  },
  dockLeft:{
    alignItems:'flex-end', 
    flex:1
  },
  coinName:{
    flexDirection:'row',
    marginStart:10
  },
  columnContainer: {
    flexDirection: "column",
  },
  itemTitle: {
    marginHorizontal: width * 0.03,
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemTitleRed: {
    marginHorizontal: width * 0.03,
    color: '#ff0000',
    fontSize: 16,
    fontWeight: "bold",
  },
  itemTitleGreen: {
    marginHorizontal: width * 0.03,
    color: "#00FF00",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemSubName:{
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    height: 45,
    width: 45,
    marginLeft: 5,
    marginRight: 10,
  },
});

export default CryptoCard;
