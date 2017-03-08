import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';
import {Text } from 'react-native'


import NewsList from './components/NewsList'
import News from './components/News'
import  Comments from './components/Comments'

const RouterWithRedux = connect()(Router);
class RouterComponent extends Component{
  render(){
      return (
        <RouterWithRedux>
              <Scene
                key="list"
                component={NewsList}
                title='component'
                navigationBarStyle={style.navigationBarStyle}
              />

                <Scene
                  key="news"
                  component={News}
                  title='component'
                  navigationBarStyle={style.navigationBarStyle}
                />

                <Scene
                  key="comment"
                  component={Comments}
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
