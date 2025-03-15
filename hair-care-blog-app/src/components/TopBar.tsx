import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hair Care Blog</Text>
            <DiskIcon />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default TopBar;