import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Divider, List, IconButton, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; 
import { Alert } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Handle Account click
  const handleAccountClick = () => {
    navigation.navigate('passwordChange');
  };

  // Handle Personal info click
  const handlePersonalInfolick = () => {
    navigation.navigate('personal');
  };

  // Handle Sign Up click
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen'); // Adjust the target screen as necessary
  };

  // Handle Log In click
  const handleLogIn = () => {
    navigation.navigate('LogInScreen'); // Adjust the target screen as necessary
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <View style={styles.profileContainer}>
          <Avatar.Image
            size={90}
            source={require('../assets/nu.jpg')} // Update the path to your local image
          />
          <View style={styles.profileInfo}>
            <Text variant="titleLarge">User</Text>
            
            {/* Sign Up and Log In Buttons */}
            <View style={styles.buttonContainer}>
              <Button mode="outlined" onPress={handleSignUp} style={styles.button}>
                Sign Up
              </Button>
              <Button mode="outlined" onPress={handleLogIn} style={styles.button}>
                Log In
              </Button>
            </View>
          </View>
        </View>
        <Divider />
      </View>

      {/* Personal Info Section */}
      <View style={styles.section}>
        <List.Item
          title="Personal Info"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="account-outline" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
          onPress={handlePersonalInfolick}
        />
        <Divider />
        {/* Account Item */}
        <List.Item
          title="Account"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="cogs" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
          onPress={handleAccountClick} // Navigate to Account on press
        />
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text variant="headlineSmall">Downloads</Text>
        <List.Item
          title="History"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="history" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
        />
        <Divider />
        <List.Item
          title="Downloads"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="download" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
        />
      </View>

      {/* Logout Button */}
      <View style={styles.logoutButtonContainer}>
        <Button mode="contained" buttonColor="indigo" onPress={() => Alert.alert('Logout')}>
          Logout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  section: {
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    marginLeft: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10, // Add some space above the buttons
  },
  button: {
    marginRight: 10, // Space between buttons
  },
  logoutButtonContainer: {
    marginTop: 'auto',
  },
});

export default ProfileScreen;
