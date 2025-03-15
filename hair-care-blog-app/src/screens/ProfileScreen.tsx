import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
    const userName = "John Doe"; // Replace with dynamic user data
    const userPhoto = "path/to/user/photo.jpg"; // Replace with dynamic user photo
    const pointsHistory = [
        { date: '2023-01-01', points: 100 },
        { date: '2023-02-01', points: 50 },
        { date: '2023-03-01', points: 200 },
    ]; // Replace with dynamic points history
    const hairCarePreferences = ["Curly", "Dry", "Color-treated"]; // Replace with dynamic preferences

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: userPhoto }} style={styles.profileImage} />
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.sectionTitle}>Points History</Text>
            {pointsHistory.map((entry, index) => (
                <Text key={index} style={styles.historyEntry}>
                    {entry.date}: {entry.points} points
                </Text>
            ))}
            <Text style={styles.sectionTitle}>Hair Care Preferences</Text>
            {hairCarePreferences.map((preference, index) => (
                <Text key={index} style={styles.preferenceEntry}>
                    - {preference}
                </Text>
            ))}
            <Text style={styles.retakeQuiz}>Retake the Quiz</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    historyEntry: {
        fontSize: 16,
        marginVertical: 5,
    },
    preferenceEntry: {
        fontSize: 16,
        marginVertical: 5,
    },
    retakeQuiz: {
        fontSize: 16,
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default ProfileScreen;