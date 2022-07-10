import { createContext, useContext } from "react";

export const UserDataContext = createContext();

export const useUserDataContext = () => useContext(UserDataContext);