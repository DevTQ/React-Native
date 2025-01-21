import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "../types/icon.png";

const LoginTemplate = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={Icon} style={styles.image} />
                <Text style={styles.title}>Login Template</Text>
                <Text style={styles.subtitle}>
                    The easiest way to start with your amazing application
                </Text>
            </View>

            {/* Bottom */}
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        marginTop: hp('5%'), 
        alignItems: 'center',
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
    },
    subtitle: {
        fontSize: wp('4.5%'),
        textAlign: 'center',
        marginTop: hp('2%'),
        color: '#555',
        paddingHorizontal: wp('5%'), 
    },
    bottom: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
    },
    loginBtn: {
        backgroundColor: '#6633FF',
        height: hp('7%'),
        borderRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        width: wp('85%'), 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    signupBtn: {
        backgroundColor: 'white',
        height: hp('7%'),
        borderRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        width: wp('85%'),
        borderWidth: 1,
        borderColor: '#6633FF',
    },
    buttonTextLogin: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: wp('4.5%'),
    },
    buttonTextSignup: {
        fontWeight: 'bold',
        fontSize: wp('4.5%'),
        color: '#6633FF',
    },
});

export default LoginTemplate;