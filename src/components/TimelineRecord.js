import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class TimelineRecord extends Component {
	render() {
	  return (
	  	<View style={{marginTop: 10, flex: 1, paddingTop: 40}}>
	  		<Text>{this.props.data.dateTime.toString()}</Text>
	  	    <Image  style={{width: '100%', height: '100%', padding: 30}} source={{uri: this.props.data.imgUrl}}></Image>	
	  	</View>
	  )
	}	
}