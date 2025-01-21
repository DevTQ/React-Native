import {ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import Icon from "../types/icon.png";

const LoginTemplete = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={Icon} style={styles.image} />
                <Text style={{ color: '#6633FF', fontWeight: '500', fontSize: 25}}>Login Template</Text>
                <Text style={{fontSize: 17, textAlign: 'center', marginTop: 12}}>The easiest way to start with your amazing application</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.buttonTextLogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.buttonTextSignup}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        marginTop: 140,
        alignItems: 'center'
    },
    image: {
        height: 130,
        width: 130,
        marginBottom: 20
    },
    bottom: {
        flex: 1.7,
        alignItems: 'center'
    },
    loginBtn: {
        backgroundColor: '#6633FF',
        height: 60,
        borderRadius: 5,
        borderWidth: 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: 350
    },
    signupBtn: {
        backgroundColor: 'white',
        height: 60,
        borderRadius: 5,
        borderWidth: 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: 350
    },
    buttonTextLogin: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonTextSignup: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#6633FF'
    },
});

export default LoginTemplete;