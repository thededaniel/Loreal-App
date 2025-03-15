import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomTabs = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#fff' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Questionnaire')}>
                <Text>Questionnaire</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HairCareTips')}>
                <Text>Hair Care Tips</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PointsExchange')}>
                <Text>Points Exchange</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomTabs;