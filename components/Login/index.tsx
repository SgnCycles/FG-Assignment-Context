"use client";
import { SetStateAction, useState } from "react";
import { users } from "@/data/userData";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";

const Login = () => {
  
  const { setUser } = useUserContext() as userContextType;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loggedInUser = users.find(
      (item) => item.username === username && item.password === password,
    );

    if (loggedInUser) setUser(loggedInUser);
  };

  return (
    <form>
      <h2>Login:</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        onChange={handleUsername}
        value={username}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        onChange={handlePassword}
        value={password}
      />
      <button
        className="bg-[#2f4858] text-white p-4 rounded mt-8"
        onClick={handleLogin}
      >
        Log In
      </button>
    </form>
  );
};

export default Login;