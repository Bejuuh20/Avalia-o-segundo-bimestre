import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calebe from './SRC/components/calebe';
import Gabriel from './SRC/components/gabriel';
import Giovana from './SRC/components/giovana';
import Julia from './SRC/components/julia';
import Thaina from './SRC/components/thaina';
import Botao from './SRC/components/button';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nossos integrantes 3B1 Lado A:</Text>
      <Calebe/>
      <Gabriel/>
      <Giovana/>
      <Julia/>
      <Thaina/>
      <Botao/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
