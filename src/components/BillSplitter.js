import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';

export default function BillSplitter({ totalBill }) {
    const [numPeople, setNumPeople] = useState('');
    const [result, setResult] = useState(null);

    const handleSplit = () => {
        const people = Number(numPeople);
        if (isNaN(people) || people <= 0) {
            Alert.alert('Enter a valid number of people');
            return;
        }
        const share = totalBill / people;
        setResult(share.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Number of people</Text>
            <TextInput
                style={styles.input}
                value={numPeople}
                onChangeText={setNumPeople}
                placeholder="Enter number of people"
                keyboardType="numeric"
            />
            <Button title="Split Bill" onPress={handleSplit} />
            {result && (
                <Text style={styles.result}>
                    Each person should pay: ₹{result}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginTop: 20 },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        marginVertical: 10,
        borderRadius: 5,
    },
    label: { fontWeight: 'bold' },
    result: { marginTop: 15, fontSize: 16, fontWeight: 'bold' },
});
