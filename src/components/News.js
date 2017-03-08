import React from 'react'
import {WebView, StyleSheet, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

 class News extends React.Component{
  render(){

    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
        onLoadStart = {() => <ActivityIndicator
        animating={true}
        style={[styles.centering, {height: 80}]}
        size="large"
        
      />}
      />
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})
export default News;
