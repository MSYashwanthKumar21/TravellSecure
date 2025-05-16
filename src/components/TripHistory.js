import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function TripHistory({ trips, onSelect }) {
    return (
        <FlatList
            data={trips}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
                    <Text style={styles.title}>{item.tripName}</Text>
                    <Text>{item.tripDate}</Text>
                    <Text>Total Bill: ₹{item.totalBill}</Text>
                </TouchableOpacity>
            )}
            ListEmptyComponent={<Text style={{textAlign:'center', marginTop:20}}>No trips added yet.</Text>}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eee',
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
    },
    title: { fontWeight: 'bold', fontSize: 16 },
});
