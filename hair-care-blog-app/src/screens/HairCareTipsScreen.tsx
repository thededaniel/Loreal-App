import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const hairCareTips = [
    { id: '1', tip: 'Use sulfate-free shampoos to maintain moisture.' },
    { id: '2', tip: 'Deep condition your hair at least once a week.' },
    { id: '3', tip: 'Trim your hair regularly to avoid split ends.' },
    { id: '4', tip: 'Avoid excessive heat styling to prevent damage.' },
    { id: '5', tip: 'Use a silk pillowcase to reduce friction on hair.' },
];

const HairCareTipsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hair Care Tips</Text>
            <FlatList
                data={hairCareTips}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tipContainer}>
                        <Text style={styles.tipText}>{item.tip}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    tipContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tipText: {
        fontSize: 16,
    },
});

export default HairCareTipsScreen;