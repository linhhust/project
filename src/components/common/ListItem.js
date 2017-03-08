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

    this.props.loadNews(this.props.item);
  }

  render(){
    return (
      <TouchableOpacity onPress = {() =>console.log('press Item')}>
          <Text> item.iddadsf</Text>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes ={
  item: React.PropTypes.number.isRequired
}
const mapStateToProps = (state) =>{
  return {data:state.newsReducer}
}
export default connect(mapStateToProps, {loadNews})(ListItem);

// export default ListItem;
