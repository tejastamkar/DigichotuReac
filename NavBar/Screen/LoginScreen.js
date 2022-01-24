import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <Text>This is Login in Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text>
                    Register Now
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>
                    Go back Home
                </Text>
            </TouchableOpacity>

        </View>
    );
}
