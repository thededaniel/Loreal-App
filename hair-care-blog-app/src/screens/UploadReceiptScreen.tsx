import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const UploadReceiptScreen = () => {
    const [couponNumber, setCouponNumber] = useState('');
    const [receiptImage, setReceiptImage] = useState(null);

    const handlePhotoUpload = () => {
        // Logic to open camera or gallery and set receiptImage
    };

    const handleSubmit = () => {
        // Logic to submit the receipt and coupon number
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Your Receipt</Text>
            <Button title="Take a Photo" onPress={handlePhotoUpload} />
            {receiptImage && <Image source={{ uri: receiptImage }} style={styles.image} />}
            <TextInput
                style={styles.input}
                placeholder="Enter Coupon Number"
                value={couponNumber}
                onChangeText={setCouponNumber}
            />
            <Button title="Submit" onPress={handleSubmit} />
            <Text style={styles.info}>
                Your receipt will be analyzed automatically after submission.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    info: {
        marginTop: 20,
        textAlign: 'center',
        color: 'gray',
    },
});

export default UploadReceiptScreen;