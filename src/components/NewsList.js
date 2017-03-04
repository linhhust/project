import React, {Component} from 'react';
import {View, Text, ListView, Platform} from 'react-native';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

import {loadData} from '../actions';
import {Button} from './common';
import {ListItem} from './common';
class TodoList extends Component{

  componentWillMount(){

    this.props.loadData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    // console.log('update', nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({data}){
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows( data);
    // console.log('create dataSource', data);
  }

  render(){
    // console.log('render', this.dataSource);
    return (
      <View style={{flex:1}} >

        <ListView
          style ={{backgroundColor:'yellow', flex:1, paddingTop:Platform.OS === 'ios' || Platform.Version > 19 ? 64 : 54}}
          enableEmptySections
          dataSource = {this.dataSource}
          renderRow = {(item) => <ListItem item = {item} />}
          />
      </View>

    );
  }

}

const mapStateToProps = (state) =>{
  console.log('map', state)
  return {data:state.newsReducer};
}
export default connect(mapStateToProps, {loadData}) (TodoList);
