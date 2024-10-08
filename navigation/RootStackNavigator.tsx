// navigation/RootStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/index';
import SignUpScreen from '../app/SignUpScreen';
import LogInScreen from '../app/LogInScreen';
import AllProgrammingLanguages from '~/app/AllProgrammingLanguages';
import ComputerScienceDetails from '~/app/ComputerScienceDetails';
import CourseDetail from '~/app/CourseDetail';
import CourseDetails from '~/app/CourseDetails';
import AI_Courses from '~/app/AI_Courses';
import CourseOverview from '~/app/CourseOverview';
import Profile from '~/app/Profile';
import AccountScreen from '../app/account';
import ChangePasswordScreen from '../app/passwordChange';
import EditPersonalScreen from '../app/personalEdit';
import ProfilePage from '../app/personal'
import personalEdit from '../app/personalEdit';
import EnrolledModulesScreen from '../app/EnrolledModules';
import Hero from '../app/place';

const Stack = createStackNavigator();

const RootStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="LogIn" component={LogInScreen} />
    <Stack.Screen name='AllProgrammingLanguages' component={AllProgrammingLanguages} />
    <Stack.Screen name='ComputerScienceDetails' component={ComputerScienceDetails} />
    <Stack.Screen name="ComputerScienceDetails" component={ComputerScienceDetails} />
    <Stack.Screen name="CourseDetail" component={CourseDetail} />
    <Stack.Screen name="AI_Courses" component={AI_Courses} />
    <Stack.Screen name="CourseDetails" component={CourseDetails} />
    <Stack.Screen name="CourseOverview" component={CourseOverview} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="account" component={AccountScreen} />
    <Stack.Screen name="passwordChange" component={ChangePasswordScreen} />
    <Stack.Screen name="EnrolledModules" component={EnrolledModulesScreen} />
    <Stack.Screen name="place" component={Hero} />
    {/* <Stack.Screen name="personalEdit" component={EditPersonalScreen} 
    initialParams={{ user: { name: '', surname: '', email: '', contactNumbers: [] } }}
     /> */}
  </Stack.Navigator>
);

export default RootStackNavigator;
