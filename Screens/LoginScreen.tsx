import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Platform, 
    KeyboardAvoidingView 
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "../types/icon.png";

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView 
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <KeyboardAwareScrollView 
                    contentContainerStyle={{ flexGrow: 1 }} 
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Image source={Icon} style={styles.image} />
                        <Text style={styles.headerText}>Welcome back.</Text>
                    </View>

                    {/* Body */}
                    <View style={styles.body}>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Email" 
                            placeholderTextColor="#999" 
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Password" 
                            placeholderTextColor="#999" 
                            secureTextEntry 
                        />
                        <TouchableOpacity>
                            <Text style={styles.link}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom */}
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.signUpText}>Don't have an account?</Text>
                            <TouchableOpacity>
                                <Text style={styles.signUpLink}> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // Header styles
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('5%'),
    },
    image: {
        height: hp('15%'),
        width: hp('15%'),
        marginBottom: hp('2%'),
    },
    headerText: {
        color: '#6633FF',
        fontWeight: '500',
        fontSize: wp('6%'),
    },

    // Body styles
    body: {
        flex: 0.5,
        paddingHorizontal: wp('5%'), 
        marginTop: hp('2%'),
    },
    input: {
        fontSize: wp('4%'), 
        height: hp('7%'),  
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: hp('2%'),
        paddingHorizontal: wp('3%'),
        borderColor: '#ccc',
    },
    link: {
        alignSelf: 'flex-end',
        fontSize: wp('3.5%'),
        opacity: 0.7,
        marginBottom: hp('2%'),
    },

    // Bottom styles
    bottom: {
        flex: 1.5,
        alignItems: 'center',
        marginTop: hp('2%'),
    },
    button: {
        backgroundColor: '#6633FF',
        height: hp('7%'),     
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('90%'),     
        marginBottom: hp('2%'),
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: wp('4.5%'),
    },
    signUpText: {
        fontSize: wp('4%'),  
    },
    signUpLink: {
        color: '#6633FF',
        fontWeight: '600',
    },
});

export default LoginScreen;