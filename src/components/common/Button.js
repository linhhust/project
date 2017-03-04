import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const Button = ({title, onPress, icon})=>{
  return (
    <TouchableOpacity onPress={onPress} style = {{paddingTop:100, backgroundColor:'red'}}>
      <Text > {title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.object,
  onPress: React.PropTypes.func
}

export  {Button};
