import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../Components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Components/EyeSlashFilledIcon";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/authContext";
import { INICIO } from "../Data/paths";
const usersData =
  JSON.parse(import.meta.env.VITE_USERS_DATA) ||
  JSON.parse(process.env.VITE_USERS_DATA);

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "" || password === "") {
      setError(true);
      return;
    }

    setError(false);
    if (usersData[user] && usersData[user].password === password) {
      login();
      navigate("/private/Inicio");
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={INICIO} />;
  } else {
    return (
      <div className="container flex w-screen h-screen justify-center items-center">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            label="User"
            placeholder="Enter your User"
            variant="bordered"
            className="max-w-xs mb-4"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs mb-4"
          />
          <Button radius="full" type="Submit">
            Iniciar sesión
          </Button>

          {error && <h1>Se requieren todos los campos</h1>}
        </form>
      </div>
    );
  }
}
