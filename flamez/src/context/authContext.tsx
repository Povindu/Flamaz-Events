import { createContext, useContext, useState, ReactNode } from "react";

type AuthUser = {
  name?: string;
  email?: string;
}


const authContext = createContext<AuthUser | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <authContext.Provider value={user}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};