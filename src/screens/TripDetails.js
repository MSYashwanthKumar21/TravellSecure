import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BillSplitter from '../components/BillSplitter';

export default function TripDetails({ route }) {
    const { trip } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{trip.tripName}</Text>
            <Text>Date: {trip.tripDate}</Text>
            <Text>Total Bill: ₹{trip.totalBill}</Text>
            <BillSplitter totalBill={trip.totalBill} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
});
