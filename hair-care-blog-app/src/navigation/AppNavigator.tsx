import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../screens/MainPage';
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import HairCareTipsScreen from '../screens/HairCareTipsScreen';
import PointsExchangeScreen from '../screens/PointsExchangeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabs from '../components/BottomTabs';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Tab.Screen name="Hair Care Tips" component={HairCareTipsScreen} />
        <Tab.Screen name="Points Exchange" component={PointsExchangeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;