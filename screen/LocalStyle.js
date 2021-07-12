import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InlineStyle = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is Local/Internal Style</Text>
        </View>
    );
}

export default InlineStyle;

const styles = StyleSheet.create({
    textStyle: {
        color: 'green',
        fontSize: 20
    }
})