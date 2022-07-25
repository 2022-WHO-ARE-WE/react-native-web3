import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <WalletConnectProvider
          redirectUrl={
            Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'
          }
          storageOptions={{
            asyncStorage: AsyncStorage as any,
          }}
        >
          <RecoilRoot>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </RecoilRoot>
        </WalletConnectProvider>
      </SafeAreaProvider>
    );
  }
}
