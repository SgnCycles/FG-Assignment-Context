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
      setErrorMessage("Wrong Username or password");
      return;
    }
    setUser(loggedInUser);
    setIsLoggedIn(true);
    setErrorMessage("");
  };

  return (
    <form className="flex flex-col justify-center items-center xl:justify-evenly h-full grid-child-3">
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
          className="input-username"
        />
      </div>
      <div className="input-container flex justify-center w-[90%]">
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
      <div className="h-5 text-secondary font-bold">{errorMessage && <p>{errorMessage}</p>}</div>
      <div className="flex justify-center">
        <button className="action-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;