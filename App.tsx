import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/loading/Loading'
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/routes';
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {

 const [ fontsLoaded ] =  useFonts({Roboto_400Regular, Roboto_700Bold});
 
  return (
    <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme = {theme}>
      <StatusBar
        barStyle='light-content'
        translucent
      />
    {fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  </Provider>
  </React.StrictMode>
  );
}

