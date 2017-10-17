import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import TimelineRecord from '../components/TimelineRecord';
import AddButton from '../components/AddButton';
import { addTimelineRecord, navigate } from '../actions/list';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class TimelineScreenContainer extends Component {
    static navigationOptions = {
        title: 'Home screen',
    };

    constructor() {
        super();
		}

    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={{ flex: 1 }}
                >
										<ListView
												dataSource={this.props.timeline}
												renderRow={(rowData) => <TimelineRecord data={rowData} />}
										/>
                </View>

                <View style={styles.bottomContainer}>
										<AddButton onPress={() => this.props.navigate('Camera')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomContainer: {
        flex: 0,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    }
});

const mapStateToProps = (state) => {
	return {
		timeline: ds.cloneWithRows(state.timeline.records)
	};
};

const mapDispatchToProps = {
	addTimelineRecord,
	navigate
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelineScreenContainer);
