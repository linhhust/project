/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {AppRegistry, Text} from 'react-native';
import App from './src/App'

import React from 'react'

import API from './src/api'
import {Item} from './src/components/common/Item'
class A extends React.Component{
  render (){
    return <Item/>
  }
}
AppRegistry.registerComponent('project', () => App);
