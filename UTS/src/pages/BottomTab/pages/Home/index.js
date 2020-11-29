import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Under } from '../../../../assets';


const Home = () => {
    return (
        <View style={styles.container} >
            <View style={styles.containersatu}>
                <View style={styles.header}>
                    <Text style={styles.title}>PhonePedia</Text>
                    <Text style={styles.desc}>Temukan informasi gadget terkini</Text>
                </View>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput 
                        underlineColorAndroid='transparent'
                        placeholder='Masukkan tipe smartphone'
                        placeholderTextColor='#000'
                        color={'#a0634e'}
                        style={{
                            fontWeight:'100',
                            fontSize: 15,
                            width: '90%'
                        }} />
                    </View>
                </View>
            </View>
            <View style={styles.containerdua}>
               <View style={styles.boxcontent}>
                   <View style={{width: '50%'}}>
                       <Text style={styles.catalog}>Rekomendasi</Text>
                       <View style={{
                           height: 4,
                           backgroundColor: '#ble5d3',
                           width: 115,
                           marginTop: -5
                       }}></View>
                   </View> 

                   <View style={{width: '50%', alignItems: 'flex-end'}}>
                       <TouchableOpacity style={styles.morebutton}>
                           <Text style={styles.moretext}>More</Text>

                       </TouchableOpacity>
                   </View>
               </View>
               <Image 
           source={Under}
           style={{width: '90%', height: '30%', marginTop: 30}}
            />
               <View style={styles.boxcontent}>
                   <View style={{width: '50%'}}>
                       <Text style={styles.catalog}>Populer</Text>
                       <View style={{
                           height: 4,
                           backgroundColor: '#ble5d3',
                           width: 115,
                           marginTop: -5
                       }}></View>
                   </View>


                   <View style={{width: '50%', alignItems: 'flex-end'}}>
                       <TouchableOpacity style={styles.morebutton}>
                           <Text style={styles.moretext}>More</Text>
                       </TouchableOpacity>
                   </View>
               </View>
               <Image 
           source={Under}
           style={{width: '90%', height: '30%', marginTop: 30}}
            />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F82D8'
    },
    containersatu: {
        marginVertical: 10
    },
    containerdua: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        // borderTopRightRadius: 40,
        paddingVertical: 20
    },
    header: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    desc: {
        fontSize: 14,
        opacity: 0.80,
        color: '#fff',
        marginHorizontal: 10,

    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 10,

    },
    search: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    boxcontent: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center'
    },
    catalog: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#5c4f4f'
    },
    morebutton: {
        backgroundColor: '#D1035E',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15
    },
    moretext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13
    },
    gradiendcard: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 10,
        marginTop: 220,
        top: 0
    },
    card: {
        height: 250,
        elevation: 2,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 160
    }

    


})



export default Home;