import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const PointsExchangeScreen = () => {
    const [pointsBalance, setPointsBalance] = React.useState(100); // Example points balance
    const [rewards, setRewards] = React.useState([
        { id: '1', name: '10% Off Coupon', points: 50 },
        { id: '2', name: 'Free Hair Product', points: 100 },
        { id: '3', name: 'Exclusive Hair Care Guide', points: 30 },
    ]);

    const redeemReward = (reward) => {
        if (pointsBalance >= reward.points) {
            setPointsBalance(pointsBalance - reward.points);
            alert(`You have redeemed: ${reward.name}`);
        } else {
            alert('Not enough points to redeem this reward.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Points Exchange</Text>
            <Text style={styles.balance}>Your Points: {pointsBalance}</Text>
            <FlatList
                data={rewards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.rewardItem}>
                        <Text>{item.name} - {item.points} Points</Text>
                        <Button title="Redeem" onPress={() => redeemReward(item)} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    balance: {
        fontSize: 18,
        marginBottom: 10,
    },
    rewardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default PointsExchangeScreen;