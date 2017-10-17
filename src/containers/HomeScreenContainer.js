import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FbButton from '../components/FbButton'; 
import {navigate} from '../actions/list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class HomeScreenContainer extends Component {
  
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Create React Redux Native App',
  };

  render() {
    return (
      <View style={styles.container}>
        <FbButton onPress={()=>{this.props.actions.navigate('Home')}}/>
      </View>
    );
  }
}

export const mapStateToProps = ({home}) => ({state: home});

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ navigate }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);
