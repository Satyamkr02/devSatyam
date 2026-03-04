import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#121212' : '#ffffff' },
      ]}>

      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            { color: isDarkMode ? '#ffffff' : '#000000' },
          ]}>
          🚀 Welcome Satyam
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: isDarkMode ? '#cccccc' : '#555555' },
          ]}>
          Your React Native project is ready.
        </Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default App;