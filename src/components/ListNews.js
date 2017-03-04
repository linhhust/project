import React from 'react'
import {
	View, Text, ListView
} from 'react-native'
import {loadList} from '../actions'
import {connect} from 'react-redux'

class ListNews extends  React.Component{
	componentWillMount(){
		this.props.loadList();
		this.createDataSource(this.props );
	}

	componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource({data}){
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.dataSource = ds.cloneWithRows(data);
	}
	render(){
		return (
				<ListView
					dataSource = {this.dataSource}
					renderRow = {(item) => <Text> item.content</Text>}
				/>
			);
	}
}

const mapStateToProps = (state) =>{
	return {
		data: state.NewsReducer
	}
}

export default connect(mapStateToProps)(ListNews);