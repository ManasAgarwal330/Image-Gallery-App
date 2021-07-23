import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Collection from './components/Collection';
import CollectionImages from './components/CollectionImages';
import PreviewImages from './components/PreviewImages';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="gray" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Collection" component={Collection} />
          <Stack.Screen name="CollectionImages" component={CollectionImages} />
          <Stack.Screen name="PreviewImages" component={PreviewImages} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    borderColor: 'black',
  },
});
