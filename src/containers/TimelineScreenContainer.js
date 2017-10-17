import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import TimelineRecord from '../components/TimelineRecord';

const timelineRecord = {
    imgUrl: 'http://via.placeholder.com/350x150',
    dateTime: new Date()
};

export default class TimelineScreenContainer extends Component {
    static navigationOptions = {
        title: 'Home screen',
    };

    constructor() {
        super();

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([timelineRecord, timelineRecord])
        }
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
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <TimelineRecord data={rowData} />}
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <View style={[styles.buttonBottom]}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => false}
                        />
                    </View>
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
    },
    button: {
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#000',
    },
    buttonBottom: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 10
    }
});
