import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import WelcomePage from '../components/WelcomePage';
import LoginScreen from '../components/LoginScreen'
import SignUp from '../components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function TabLayout() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={WelcomePage} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
        />
        {/* Other screens */}
      </Stack.Navigator>
    </>
  );
}