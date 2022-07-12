export type { SignUpInfo } from '@/pages/signup/types';

export type TStoreAuth = {
  userInfo: {
    email: string;
    nickname: string;
  };
  isLoading: boolean;
  isAuthChecked: boolean;
  error: string;
};
