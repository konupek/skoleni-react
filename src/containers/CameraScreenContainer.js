import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FbButton from '../components/FbButton'; 
import {fbLogin} from '../actions/list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export class CameraScreenContainer extends Component {
	render() {
		<View style={styles.container}>
	        <Camera
	          ref={(cam) => {
	            this.camera = cam;
	          }}
	          style={styles.preview}
	          aspect={Camera.constants.Aspect.fill}>
	          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
	        </Camera>
      </View> 
	}	
}

export const mapStateToProps = (state) => ({});

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreenContainer);