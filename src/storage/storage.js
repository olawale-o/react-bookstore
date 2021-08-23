const APP_KEY = 'BOOKSTORE';

export const getStorage = (key = APP_KEY) => localStorage.getItem(key);

export const setStorage = (data, key = APP_KEY) => {
  localStorage.setItem(key, data);
};
