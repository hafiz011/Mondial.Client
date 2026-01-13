"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form
      onSubmit={submit}
      className="mx-auto mt-40 max-w-sm space-y-4"
    >
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        placeholder="Email"
        className="w-full border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        className="w-full border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full rounded bg-black py-2 text-white">
        Login
      </button>
    </form>
  );
}
