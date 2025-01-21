import {ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from "../types/icon.png";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = () => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.header}>
                    <Image source={Icon} style={styles.image} />
                    <Text style={{ color: '#6633FF', fontWeight: '500', fontSize: 25 }}>Create Account</Text>
                </View>
                <View style={styles.body}>
                    <TextInput style={styles.input} placeholder="  Name" />
                    <TextInput style={styles.input} placeholder="  Email" />
                    <TextInput style={styles.input} placeholder="  Password" secureTextEntry />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 16}}>
                        Already have an account? <Text style={{ color: '#6633FF', fontWeight: '600'}}>Login</Text>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    header: {
        flex: 0.5,
        marginTop: 140,
        alignItems: 'center'
    },
    image: {
        height: 130,
        width: 130,
        marginBottom: 20
    },
    body: {
        flex: 0.5,
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 18,
        height: 65,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    bottom: {
        flex: 2,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#6633FF',
        height: 60,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: 350
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default RegisterScreen;