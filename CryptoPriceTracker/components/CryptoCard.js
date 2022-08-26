import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CryptoCard = () => {
  return (
    <TouchableOpacity>
        <View style={styles.itemWrapper}>
            {/*Here's the view for left side*/}
            <View style={styles.leftWrapper}></View>

            {/*Here's the view for right side*/}
            <View style={styles.rightWrapper}></View>
        </View>
        <Text>Hello World!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    itemWrapper:{
    },
});

export default CryptoCard;
