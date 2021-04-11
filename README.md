# React Native StyleSheet

## Inline Style :
<p>Using Inline style, you just put any style property into double curly braces <b>{{}}</b> before style attribute </p> 

```js
<Text style={{color:'red', fontSize:20}}>This is Inline Style</Text>
```

## Local Style :
<p>In Local style first <b>import StyleSheet from 'react-native'</b></p>

```js
import {StyleSheet} from 'react-native'
```
<p>Then create a <b>styles</b> object with StyleSheet <b>create method</b></p>

```js
const styles = StyleSheet.create({
    textStyle:{
        color:'green',
        fontSize:20
    }
})
```
<p>Now using styles object just pass the object value with <b>dot '.'</b> in to <b>style attribute</b></p>

```js
<Text style={styles.textStyle}>This is Local/Internal Style</Text>
```

## Global Style :
<p>In Global style first create a <b>Styles.js</b> file and put your all styles into this file </p>

```js
export default StyleSheet.create({
    textStyle:{
        color:'tomato',
        fontSize:20
    }
})

export const globalStyle = StyleSheet.create({
    textStyle:{
        color:'lightblue',
        fontSize:20
    }
})
```
<p>Now using Global style into your component you can just <b>import the Styles.js</b> file and pass the object value</p>

```js
import Styles from './Styles';
<Text style={Styles.textStyle}>This is Global/External Style</Text>

import {globalStyle} from './Styles';
 <Text style={globalStyle.textStyle}>Another way to use GlobalStyles</Text>
```

## Multiple Style Object :
<p>You can pass multiple styles object into style attribute, <b>using array</b></p>

```js
  <Text style={[styles.textColor, styles.textSize]}>Use Multuple Style Object</Text>
```

## Usage
```
 $ git clone https://github.com/SuryaKarmakar/React-Native-StyleSheet.git
 $ cd React-Native-StyleSheet
 $ npm install 
 $ npm run [web, android, ios]
```
## Run with Expo 
```
 $ expo start --[web, android, ios]
```

