import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import moment from 'moment';

export default class TimelineRecord extends React.Component {
    render() {
        const { dateTime, imgUrl } = this.props.data;
        const date = moment(dateTime).format('DD.MM.YYYY HH:mm');
        return (
            <View style={[styles.view]}>
                <Text style={styles.text}>
									{date}
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
