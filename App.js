import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Cesta } from './src/Telas/Cesta';
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading'


export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  })

  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta topo={mock.topo} detalhes={mock.detalhes} itens={mock.itens} />
    </SafeAreaView>
  );
}


