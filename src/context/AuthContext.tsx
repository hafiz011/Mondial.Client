"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { UserRole } from "@/lib/roles";

type User = {
  id: string;
  name: string;
  role: UserRole;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) return;

    try {
      setUser(JSON.parse(stored));
    } catch {
      localStorage.clear();
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    const { token, user: apiUser } = res.data;

    const user: User = {
      id: apiUser.id,
      name: apiUser.name,
      role: apiUser.roles[0] as UserRole,
    };

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);

    const roleRoutes: Record<UserRole, string> = {
      Admin: "/dashboard/admin",
      Creator: "/dashboard/creator",
      Investor: "/dashboard/investor",
      Advisor: "/dashboard/advisor",
    };

    router.push(roleRoutes[user.role]);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
