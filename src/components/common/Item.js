import React from 'react'
import {
  TouchableOpacity,
  Text,View, StyleSheet
} from 'react-native'
import {Actions} from 'react-native-router-flux'

const Item = ({item}) =>{
  // console.log(item._65 );
  console.log('item', item);
  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress = {() =>Actions.news({item})}
          style={styles.containerLeft}
      >
        <Text style = {styles.title}> {item.title}</Text>
        <Text style = {styles.common}>{item.by}, {item.time}</Text>
        <Text style = {styles.common}> {item.url} </Text>
      </TouchableOpacity>
      <View style={styles.containerRight}>
        <Text style = {styles.comment}> {item.comment}</Text>
        <Text style = {styles.view}>{item.view}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',

    borderBottomColor: '#bbb',
    borderBottomWidth: 1
  },
  containerLeft: {
    flex: 7,
    flexDirection:'column'
  },
  containerRight: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  common:{
    fontSize:10,
    color: '#CCCCCC'
  },
  comment:{

  },
  view: {

  }

})

Item.propTypes ={
  item: React.PropTypes.object.isRequired
}

export {Item};
