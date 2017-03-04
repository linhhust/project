import React from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'

 class AddTask extends React.Component{
  render(){

    return (
      <View style = {{paddingTop:100}}>
        <Text > {this.props.item.content} </Text>
        <Text > {this.props.item.resolved} </Text>
      </View>
    );
  }
}

export default AddTask;
