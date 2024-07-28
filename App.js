import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import circularIcon from './components/circularIcon'

export default function App() {
  return (
    <View style={styles.container}>
      <circularIcon/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
