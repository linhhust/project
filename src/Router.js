import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';
import {Text } from 'react-native'


import NewsList from './components/NewsList'
import AddTask from './components/AddTask'

const RouterWithRedux = connect()(Router);
class RouterComponent extends Component{
  render(){
      return (
        <RouterWithRedux>
              <Scene
                key="todo"
                component={NewsList}
                title='component'
                navigationBarStyle={style.navigationBarStyle}
              />

              <Scene
                key="add"
                component={AddTask}
                title='component'
                navigationBarStyle={style.navigationBarStyle}
              />

        </RouterWithRedux>
      );
  }
}

const style = {
	navigationBarStyle:{
		backgroundColor:'green'
	}
}
export default RouterComponent;
