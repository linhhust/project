import React from 'react'
import {connect} from 'react-redux'
import {Router, Scene} from 'react-native-router-flux'

import ListNews from './components/ListNews'

const RouterWithRedux = connect(Router);

export default class RouterComponent extends React.Component{
	render(){
		return (
				<RouterWithRedux>
					<Scene
						key = 'listnews'
						component={ListNews}
						title= 'HomePage'
					/>
				</RouterWithRedux>
			);
	}
}