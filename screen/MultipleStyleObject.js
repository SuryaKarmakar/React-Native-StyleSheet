import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const MultipleStyleObject = () =>{
    return(
        <View>
            <Text style={[styles.textColor, styles.textSize]}>Use Multuple Style Object</Text>
        </View>
    );
}

export default MultipleStyleObject;

const styles = StyleSheet.create({
    textColor:{
        color:'blue'
    },
    textSize:{
        fontSize:20
    }
})