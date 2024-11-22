import { createContext, useContext } from 'react';
import { UserInfoType } from '../types/UserInfo';

export interface UserContextType {
  userInfo: UserInfoType;
  setUserInfo: (value: UserInfoType) => void | undefined;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const useUserContext = () => useContext(UserContext);
