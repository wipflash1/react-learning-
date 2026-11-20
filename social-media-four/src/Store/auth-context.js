import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: null,
  logout: () => {},
  loading: true,
});

export const useAuth = () => useContext(AuthContext);
