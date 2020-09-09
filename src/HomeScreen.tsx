import React from 'react';
import { Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
    <Button
        title="Statistics"
        onPress={() =>
            navigation.navigate('Statistics')
        }
    />
    );
};