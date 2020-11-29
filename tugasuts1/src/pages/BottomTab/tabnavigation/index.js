import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../pages';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  name={
                    focused
                      ? 'home'
                      : 'home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Icon
                  name={focused ? 'person' : 'person'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#a0634e',
          inactiveTintColor: '#5c4f4f',
        }}
      >
          <Tab.Screen name="UTAMA" component={Home} />
          <Tab.Screen name="TENTANG" component={Profile} />
      </Tab.Navigator>
    )
}

export default BottomTab;
  