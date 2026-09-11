"use client";
import { SetStateAction, useState } from "react";
import { users } from "@/data/userData";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  
  const { setUser, setIsLoggedIn } = useUserContext() as userContextType;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setErrorMessage("");
    setUsername(e.target.value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setErrorMessage("");
    setPassword(e.target.value);
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loggedInUser = users.find(
      (item) => item.username === username && item.password === password,
    );

    if (!loggedInUser) {
      setErrorMessage("Wrong Username or Password");
      return;
    }
    setUser(loggedInUser);
    setIsLoggedIn(true);
    setErrorMessage("");
  };

  return (
    <form className="flex flex-col h-full justify-evenly items-center">
      <div className="h-full w-full flex flex-col justify-evenly items-center">
        <div className="input-container flex justify-center">
          <label htmlFor="username" className="label font-work-sans">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            onChange={handleUsername}
            value={username}
            className="input-username"
          />
        </div>
        <div className="input-container flex justify-center">
          <label htmlFor="password" className="label font-work-sans">
            Password:
          </label>
          <div className="password-input relative w-full flex flex-end">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              onChange={handlePassword}
              value={password}
              className="input-password relative"
            />
            {showPassword ? (
              <AiFillEye
                className="eye-icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEyeInvisible
                className="eye-icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
        </div>
        <div className="h-5 text-secondary font-bold">
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="flex justify-center">
          <button className="action-button" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;