import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../Components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../Components/EyeSlashFilledIcon";
import { useNavigate } from "react-router-dom";
// import { usersData } from "../Data/DATA-Users";
const usersData = process.env.REACT_APP_USERS_DATA;

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "" || password === "") {
      setError(true);
      return;
    }

    setError(false);
    if (usersData[user] && usersData[user].password === password) {
      navigate("/Inicio");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container flex mx-auto h-screen justify-center items-center">
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
