import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class TimelineRecord extends React.Component {
    render() {
        const { dateTime, imgUrl } = this.props.data;

        return (
            <View style={[styles.view]}>
                <Text style={styles.text}>
                    {dateTime.toString()}
                </Text>
                <Image
                    source={{ uri: imgUrl }}
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = {
    view: {
        flex: 1,
        padding: 10,
        paddingTop: 0,
        position: 'relative'
    },
    image: {
        width: null,
        height: 300
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff',
        fontSize: 16
    }
}
