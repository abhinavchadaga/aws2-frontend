import axios from 'axios';

const BaseDomain = 'http://localhost:8080';

const userApi = axios.create({
  baseURL: `${BaseDomain}/users`
});

export const createNewUser = async (username: string) => {
  const response = await userApi.post(
    '/', { username }
  );
  return response;
};

export const getUser = async (username: string) => {
  const response = await userApi.get(`/${username}`);
  return response;
};