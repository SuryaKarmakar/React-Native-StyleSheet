import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles';
import { globalStyle } from './Styles';

const InlineStyle = () => {
    return (
        <View>
            <Text style={Styles.textStyle}>This is Global/External Style</Text>

            <Text style={globalStyle.textStyle}>Another way to use GlobalStyles</Text>
        </View>
    );
}

export default InlineStyle;