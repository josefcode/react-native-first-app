import { Groups } from './src/screens/groups/Groups';
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/loading/Loading'
import { StatusBar } from 'expo-status-bar';
import type {StatusBarStyle} from 'react-native';
import { NewGroup } from './src/screens/new-groups/NewGroup';
import { Players } from './src/screens/players/Players';


export default function App() {
const STYLES = ['default', 'dark-content', 'light-content'] as const;
const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
  STYLES[2],
);
 const [ fontsLoaded ] =  useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme = {theme}>
      <StatusBar
        barStyle='light-content'
        translucent
      />
    {fontsLoaded ? <Players /> : <Loading /> }
    </ThemeProvider>
  );
}

