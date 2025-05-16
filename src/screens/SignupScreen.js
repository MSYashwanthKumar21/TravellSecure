import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { supabase } from '../lib/supabase';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        setLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        setLoading(false);

        if (error) {
            Alert.alert('Signup failed', error.message);
        } else {
            Alert.alert('Success', 'Signup complete! Please check your email for verification.');
            navigation.replace('LoginScreen'); // Navigate to login after signup
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a new account</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <Button title="Sign Up" onPress={handleSignup} />
            )}
            <Text style={styles.loginText} onPress={() => navigation.replace('LoginScreen')}>
                Already have an account? Log in
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 15,
        borderRadius: 5,
    },
    loginText: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
