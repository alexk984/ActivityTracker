import React from 'react';
import { Button } from 'react-native';

export default function TimerScreen({ navigation }) {
    return (
    <Button
        title="Stop activity"
        onPress={() =>
            navigation.navigate('Home')
        }
    />
    );
};