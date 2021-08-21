import { post
 } from "../api/api";
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/';

export const createApp = async () => {
  const END_POINT = 'apps/';
  const URI = `${BASE_URL}${END_POINT}`;
  const response = await post(URI);
  return response.text();
};

export const postBook = async (appId, data) => {
  const END_POINT = `apps/${appId}/books/`;
  const URI = `${BASE_URL}${END_POINT}`;
  const response = await post(URI, data);
  return response.json();
};
