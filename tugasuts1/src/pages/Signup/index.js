import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import FlatButton from '../../Button';

const Signup = ({navigation}) => {
    return(
        <View style={styles.container} >
            <View style={styles.containersatu}>
                <View style={styles.header}>
                    <Text style={styles.title}>AYO DAFTAR!</Text>
                    <Text style={styles.desc}>silakan lengkapi data untuk login</Text>
                </View>
            </View>
            <View style={styles.containerdua}>
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
                    placeholder={'Nama Pengguna'}
                    placeholderTextColor={'#4F82D8'}
                    color={'#000'}
                    />
                </View>
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
                    placeholder={'Nomor Telepon'}
                    placeholderTextColor={'#4F82D8'}
                    color={'#000'}
                    keyboardType={'phone-pad'}
                    />
                </View>
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
                    placeholder={'Email'}
                    placeholderTextColor={'#4F82D8'}
                    color={'#000'}
                    keyboardType={'email-address'}
                    />
                </View>
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
                    placeholder={'Kata Sandi'}
                    placeholderTextColor={'#4F82D8'}
                    color={'#000'}
                    secureTextEntry
                    />
                </View>
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
                    placeholder={'Konfirmasi Kata Sandi'}
                    placeholderTextColor={'#4F82D8'}
                    color={'#000'}
                    secureTextEntry
                    />
                </View>
                <View style={{
                marginHorizontal: 100,
                justifyContent: 'center',
                marginTop: 15,
                }}>
                    <FlatButton text='DAFTAR' onPress={() => Alert.alert('Berhasil!')} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1035E'
    },
    containersatu: {
        flex: 0.20
    },
    containerdua: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 0,
        paddingVertical: 20
    },
    header: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20
    },
    desc: {
        fontSize: 15,
        color: '#fff'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5
    }

    


})

export default Signup;