import { StyleSheet, View } from 'react-native';
import Main from './screens/main';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
        <Main />
    </SafeAreaProvider>
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
