import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import { addTimelineRecord } from '../actions/list';

class CameraScreenContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={() => false}>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }
}

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

const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = {
    addTimelineRecord
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreenContainer);