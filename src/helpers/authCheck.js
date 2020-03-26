import AsyncStorage from '@react-native-community/async-storage';
import { Constant } from './constant';

export const setToken = async (token) => {
    await AsyncStorage.setItem(Constant.storage.token, token)
}

export const getToken = () => {
    return new Promise((resolve) => {
        AsyncStorage.getItem(Constant.storage.token)
          .then(res => {
            if (res !== null) {
              resolve(res);
            } else {
              resolve();
            }
          })
          .catch(err => resolve());
      });
}

export const removeUser = async () => {
    await AsyncStorage.removeItem(Constant.storage.token);
}

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(Constant.storage.token)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};