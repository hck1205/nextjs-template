import { axiosClient as client } from '@/lib';

export const signIn = async (params: { email: string; password: string }) => {
  return await client.post('auth/signin', params);
};

export const signUp = async (params: {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}) => {
  return await client.post('auth/signUp', params);
};
