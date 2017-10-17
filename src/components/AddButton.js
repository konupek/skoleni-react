import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class AddButton extends React.Component {
    render() {
        return (
            <View style={[styles.buttonBottom]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default AddButton;