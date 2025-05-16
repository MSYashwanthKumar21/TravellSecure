import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import TripHistory from '../components/TripHistory';
import { loadTrips } from '../utils/storage';

export default function Home({ navigation }) {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadTrips().then(setTrips);
        });
        return unsubscribe;
    }, [navigation]);

    const handleSelectTrip = (trip) => {
        navigation.navigate('TripDetails', { trip });
    };

    return (
        <View style={styles.container}>
            <Button title="Add New Trip" onPress={() => navigation.navigate('AddTrip')} />
            <Button title="Open Map" onPress={() => navigation.navigate('Map')} />

            <View style={{ height: 10 }} />
            <Button title="Open Map" onPress={() => navigation.navigate('Map')} /> {/* ✅ Corrected here */}
            <TripHistory trips={trips} onSelect={handleSelectTrip} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
});
