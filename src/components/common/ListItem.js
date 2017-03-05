import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {loadNews} from '../../actions';

class ListItem extends React.Component{
  componentWillMount(){
    console.log('will ListItem')
    this.props.loadNews(this.props.item);
  }
  <TouchableOpacity onPress = {() =>Actions.add({item})}>
      <Text> item.id</Text>

  </TouchableOpacity>
  render(){
    return (
      <TouchableOpacity onPress = {() =>console.log('press Item')}>
          <Text> item.id</Text>

      </TouchableOpacity>
    );
  }
}

ListItem.propTypes ={
  item: React.PropTypes.string.isRequired
}
const mapStateToProps = (state) =>{
  console.log('ListItem map', state);
  return {data:[]}
}
export default connect(mapStateToProps)(ListItem);
