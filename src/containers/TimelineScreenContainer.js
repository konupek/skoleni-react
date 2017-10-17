import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import TimelineRecord from '../components/TimelineRecord';

const timelineRecord = {
		imgUrl: 'http://via.placeholder.com/350x150',
		dateTime: new Date()
}

export default class TimelineScreenContainer extends Component {

	constructor() {
	    super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows([timelineRecord, timelineRecord]),
	    };
  	}

	render() {
		return (
			<ListView dataSource={this.state.dataSource}
        renderRow={
        	(rowData) => <TimelineRecord data={rowData} />
        }
      />
		);
	}
}