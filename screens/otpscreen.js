import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import emailjs from '@emailjs/react-native';

const Otpscreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        // Perform your registration logic here
        // For example, validate inputs and store user data

        // Define email parameters
        const templateParams = {
            user_name: name,
            user_email: email,
            message: 'Welcome to [Your App Name]! Your registration was successful.',
        };

        // Send confirmation email
        emailjs.send('service_8c49npq', 'template_oun410k', templateParams, {
            publicKey: 'usOiCoUEmTAQ8kytT',
            privateKey:'qJ2DQTW3KOqJV6vw68Hs2'
        })
        .then(response => {
            console.log('Email sent successfully!', response.status, response.text);
            Alert.alert('Success', 'Registration successful. A confirmation email has been sent.');
        })
        .catch(err => {
            console.error('Failed to send email.', err);
            Alert.alert('Registration successful, but failed to send confirmation email.');
        });

        // Navigate to another screen if needed
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Otpscreen;
