import { createContext, useContext } from "react";

export const AuthStatusContext = createContext();

export const useAuthStatusContext = () => useContext(AuthStatusContext);