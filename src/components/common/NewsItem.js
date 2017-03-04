import React from 'react'
import {
	View, Text, TouchableOpacity
} from 'react-native'

class NewsItem extends React.Component{
	render(){
		console.log('NewsItem', this.props.item);
		return (){
			<View style={{paddingTop:100}}>
				<TouchableOpacity onPress={() => console.log('press NewsItem')}>
					<Text> item </Text>
				</TouchableOpacity>
			</View>
		};	
	}
}

NewsItem.propTypes = {
	item: React.PropTypes.object.isRequired
}

export deault {NewsItem};