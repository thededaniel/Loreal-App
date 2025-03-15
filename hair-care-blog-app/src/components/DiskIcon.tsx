import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const DiskIcon = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image 
                source={require('../assets/illustrations/disk-icon.png')} 
                style={styles.icon} 
                resizeMode="contain" 
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default DiskIcon;