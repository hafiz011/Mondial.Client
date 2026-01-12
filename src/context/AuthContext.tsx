"use client";

import { createContext, useContext } from "react";
import { UserRole } from "@/lib/roles";

type User = {
  id: string;
  role: UserRole;
};

const AuthContext = createContext<User>({
  id: "1",
  role: UserRole.ADMIN, // change role here to test
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider
      value={{ id: "1", role: UserRole.ADMIN }}
    >
      {children}
    </AuthContext.Provider>
  );
}
