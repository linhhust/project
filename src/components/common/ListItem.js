import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

const ListItem = ({item}) =>{
  return (
    <TouchableOpacity onPress = {() =>Actions.add({item})}>
      <Text> {item.content}</Text>
      <Text> {item.resolved ? 'Done' : 'Not yet'}</Text>
    </TouchableOpacity>
  );
}

ListItem.propTypes ={
  item: React.PropTypes.object.isRequired
}

export {ListItem}
