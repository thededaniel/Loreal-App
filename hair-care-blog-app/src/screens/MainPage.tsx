import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import BottomTabs from '../components/BottomTabs';

const MainPage = () => {
    const hairCarePosts = [
        { id: '1', title: '5 Tips for Healthy Hair', content: 'Learn how to keep your hair healthy and shiny.' },
        { id: '2', title: 'Best Products for Curly Hair', content: 'Discover the best products for your curls.' },
        { id: '3', title: 'How to Prevent Hair Loss', content: 'Tips and tricks to prevent hair loss.' },
        // Add more posts as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TopBar />
            <FlatList
                data={hairCarePosts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.feed}
            />
            <BottomTabs />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    feed: {
        paddingBottom: 60, // Space for bottom tabs
    },
    postContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    postContent: {
        fontSize: 14,
        color: '#666',
    },
});

export default MainPage;