import { useState } from "react";
import { AuthContext } from "./auth-context";

// Front-end only: there is no server yet, so any valid email/password "logs in".
// Only the email is kept; the password is never stored.
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    setUser({ email, name: email.split("@")[0] });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
