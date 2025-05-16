import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

export default function TripForm({ onSubmit }) {
    const [tripName, setTripName] = useState('');
    const [tripDate, setTripDate] = useState('');
    const [totalBill, setTotalBill] = useState('');

    const handleSubmit = () => {
        if (!tripName || !tripDate || !totalBill) {
            Alert.alert('Please fill all fields');
            return;
        }
        if (isNaN(Number(totalBill))) {
            Alert.alert('Total bill must be a number');
            return;
        }
        onSubmit({ tripName, tripDate, totalBill: Number(totalBill) });
        setTripName('');
        setTripDate('');
        setTotalBill('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Trip Name</Text>
            <TextInput
                style={styles.input}
                value={tripName}
                onChangeText={setTripName}
                placeholder="Enter trip name"
            />
            <Text style={styles.label}>Trip Date</Text>
            <TextInput
                style={styles.input}
                value={tripDate}
                onChangeText={setTripDate}
                placeholder="YYYY-MM-DD"
            />
            <Text style={styles.label}>Total Bill</Text>
            <TextInput
                style={styles.input}
                value={totalBill}
                onChangeText={setTotalBill}
                placeholder="Enter total bill amount"
                keyboardType="numeric"
            />
            <Button title="Add Trip" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 15 },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        marginBottom: 15,
        borderRadius: 5,
    },
    label: { marginBottom: 5, fontWeight: 'bold' },
});
