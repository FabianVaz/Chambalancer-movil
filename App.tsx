import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, Text, StyleSheet } from 'react-native';
import ProfileScreen from './app/screens/ProfileScreen';
import ServicesScreen from './app/screens/ServicesScreen';
import AboutScreen from './app/screens/AboutScreen';
import ContactScreen from './app/screens/ContactScreen';
import LoginScreen from './app/screens/LoginScreen';
import PublishService from './app/screens/PublishService';
import RegisterScreen from './app/screens/RegisterScreen';
import { ServiceProvider } from './app/context/ServiceContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs: React.FC = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chambalancer</Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = require('./app/icons/home.png');
            } else if (route.name === 'Services') {
              iconName = require('./app/icons/services.png');
            } else if (route.name === 'About') {
              iconName = require('./app/icons/about.png');
            } else if (route.name === 'Contact') {
              iconName = require('./app/icons/contact.png');
            }

            return <Image source={iconName} style={{ width: 24, height: 24, tintColor: focused ? '#00C8F8' : '#005DFF' }} />;
          },
          tabBarActiveTintColor: '#00C8F8',
          tabBarInactiveTintColor: '#005DFF',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Profile">
          {() => <ProfileScreen user={user} />}
        </Tab.Screen>
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <ServiceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="PublishService" component={PublishService} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ServiceProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#005DFF',
    padding: 15,
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#005DFF',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
});

export default App;
