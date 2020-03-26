import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Text } from 'react-native-paper';

export default Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.chatText}>Chat App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30
    },
    chatText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'Pokemon Hollow'
    }
})