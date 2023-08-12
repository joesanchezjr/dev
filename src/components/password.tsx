"use client";
import { useApp } from "@/context/app-context/app-context";
import React from "react";

export function PasswordGuard({ children }: { children: React.ReactNode }) {
  const [error, setError] = React.useState(false);
  const { state, dispatch } = useApp();
  const [password, setPassword] = React.useState("");

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/app/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const { success } = await res.json();
      if (success) {
        dispatch({ type: "open" });
      } else {
        setError(true);
        dispatch({ type: "close" });
      }
    } catch (error) {}
  };

  if (state.unlocked) {
    // using a simple guard but a more complex redirect could be used here
    return children;
  }

  return (
    <div className="max-width my-24">
      <h1 className="text-3xl font-bold">Password</h1>
      <p className="mb-4">Will need to be re-entered on page refresh</p>
      <form onSubmit={handlePasswordSubmit} className="space-x-2">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded border border-gray-300 p-2 sm:w-auto"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Enter
        </button>
      </form>
      {error && <span className="text-red-500">Wrong password</span>}
    </div>
  );
}
