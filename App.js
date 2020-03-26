import 'react-native-gesture-handler';

import React from 'react';
import { LoggedOutStack } from './src/navRoutes/loggedOutStack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/splash/Splash';
import { AuthContext } from './src/helpers/context';
import { setToken, removeUser, isSignedIn } from './src/helpers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Theme } from './src/config/theme';
import { Provider as PaperProvider } from 'react-native-paper';
import { MainModal } from './src/navRoutes/modalStack';

export default () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const theme = Theme; //adds theme to react-native-paper UIs
  const authContext = React.useMemo(() => {
    return {
      signIn: async (token) => {
        setIsLoading(false);
        await setToken(token);
        setUserToken(token);
      },
      signUp: async (token) => {
        setIsLoading(false);
        await setToken(token);
        setUserToken(token);
      },
      signOut: async () => {
        setIsLoading(false);
        await removeUser();
        setUserToken(null);
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = await isSignedIn();
      setUserToken(userToken);
      setIsLoading(false);
    }, 0)
  })

  if (isLoading) {
    return <Splash />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            {userToken ?
              <MainModal /> : <LoggedOutStack />
            }
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </AuthContext.Provider>
  )
}
