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
    <form className="flex flex-col justify-center gap-8 xl:justify-between h-full grid-child-3">
      <div className="input-container flex justify-center w-[90%]">
        <label htmlFor="username" className="label font-work-sans">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          onChange={handleUsername}
          value={username}
          className="input"
        />
      </div>
      <div className="input-container flex justify-center w-[90%] bg-blue-600">
        <label htmlFor="password" className="label font-work-sans">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          onChange={handlePassword}
          value={password}
          className="input"
        />
      </div>
      <button
        className="bg-primary text-white font-bold p-2 rounded-2xl w-[30%] place-self-center tracking-widest cursor-pointer"
        onClick={handleLogin}
      >
        Log In
      </button>
    </form>
  );
};

export default Login;