import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { AkunIlustration } from '../../assets';
import { Icon } from 'react-native-elements';
import FlatButton from '../../Button';


const Login = ({navigation}) => {
    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
           <Image 
           source={AkunIlustration}
           style={{width: '100%', height: '40%', marginTop: 30}}
            />

            <Text style={{
                fontSize: 35, 
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#D1035E'
                }} >SELAMAT DATANG!
            </Text>
            <Text style={{
                marginHorizontal: 40,
                textAlign: 'center',
                marginTop: 4,
                opacity: 0.5
            }}>Temukan informasi tentang smartphone terbaru hanya di genggaman anda
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                borderWidth: 2,
                marginTop: 20,
                paddingHorizontal: 10,
                borderColor: '#D1035E',
                borderRadius: 0,
                paddingVertical: 2
            }}>
                <TextInput style={{
                    paddingHorizontal: 10,
                    maxWidth: '90%',
                    width: '90%'
                }}
                placeholder={'Username atau Email'}
                placeholderTextColor={'#4F82D8'}
                color={'#000'}
                keyboardType={'email-address'} />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                borderWidth: 2,
                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: '#D1035E',
                borderRadius: 0,
                paddingVertical: 2
            }}>
                
                <TextInput style={{
                    paddingHorizontal: 10,
                    maxWidth: '90%',
                    width: '90%'
                }}
                placeholder={'Password'}
                placeholderTextColor={'#4F82D8'}
                color={'#000'}
                secureTextEntry
                 />
            </View>
            <View style={{
                marginHorizontal: 100,
                justifyContent: 'center',
                marginTop: 15,
            }}
             >
                <FlatButton text='login' onPress={() => navigation.replace('BottomTab')} />
            </View>
            <Text style={{
                alignSelf: 'center',
                color: '#000',
                paddingVertical: 30,
                fontWeight: 'bold'
            }}>Belum punya akun? <Text style={{
                textDecorationLine: 'underline'
            }} onPress={() => navigation.navigate('Signup')} >Daftar</Text>
            </Text>

        </View>
    )
}

export default Login;