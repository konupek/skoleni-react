import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TimelineRecord from '../components/TimelineRecord';
import AddButton from '../components/AddButton';

import {addTimelineRecord, navigate} from '../actions/list';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


export class TimelineScreenContainer extends Component {
    static navigationOptions = {
        title: 'Home screen',
    };

    render() {
        return (
            <View
                style={{flex: 1,backgroundColor: '#fff'}}
            >
                <View
                    style={{ flex: 1 }}
                >
                    <ListView
                        dataSource={this.props.dataSource}
                        renderRow={(rowData) => <TimelineRecord data={rowData} />}
                    />
                </View>
                <AddButton onPress={() => this.props.actions.navigate('Camera')} />
            </View>
        );
    }
}

export const mapStateToProps = (state) => ({dataSource: ds.cloneWithRows(state.timeline.timeline)});

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ addTimelineRecord, navigate}, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(TimelineScreenContainer);
