import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "../types/icon.png";

const RegisterScreen = () => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Image source={Icon} style={styles.image} />
                    <Text style={styles.title}>Create Account</Text>
                </View>

                {/* Body */}
                <View style={styles.body}>
                    <TextInput style={styles.input} placeholder="Name" />
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Password" 
                        secureTextEntry
                    />
                </View>

                {/* Bottom */}
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.footerText}>Already have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginTop: hp('5%'),
    },
    image: {
        height: hp('15%'),
        width: hp('15%'),
        marginBottom: hp('2%'),
    },
    title: {
        color: '#6633FF',
        fontWeight: '500',
        fontSize: wp('6%'), 
        marginBottom: hp('2%'),
    },
    body: {
        paddingHorizontal: wp('5%'),
        marginBottom: hp('2%'),
    },
    input: {
        fontSize: wp('4.5%'), 
        height: hp('7%'),
        borderWidth: 1,
        borderRadius: wp('2%'),
        marginBottom: hp('2.5%'),
        paddingHorizontal: wp('4%'),
        borderColor: '#ccc',
    },
    bottom: {
        alignItems: 'center',
        marginTop: hp('2%'),
    },
    button: {
        backgroundColor: '#6633FF',
        height: hp('7%'),
        borderRadius: wp('2%'),
        justifyContent: "center",
        alignItems: "center",
        width: wp('85%'),
        marginBottom: hp('2%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: wp('4.5%'),
    },
    footerText: {
        fontSize: wp('4%'),
    },
    footerLink: {
        color: '#6633FF',
        fontWeight: '600',
    },
});

export default RegisterScreen;