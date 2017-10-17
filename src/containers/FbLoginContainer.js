import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FbButton from '../components/FbButton'; 
import {fbLogin} from '../actions/list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class FbLoginContainer extends Component {
	render() {
		return (
			<FbButton onPress={this.props.actions.fbLogin} />
		);
	}	
};

export const mapStateToProps = ({fbLogin}) => ({state: fbLogin});

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ fbLogin }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(FbLoginContainer);