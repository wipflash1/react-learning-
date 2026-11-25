import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: null,
  logout: () => {},
  loading: true,
  refreshUser: () => {},
});

export const useAuth = () => useContext(AuthContext);
