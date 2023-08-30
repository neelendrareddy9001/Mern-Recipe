import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  return (
    <>
      <Login />
      <Register />
    </>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_toeken"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      console.log(result, "userpass");
      setCookies("access_toeken", result.data.token);
      window.localStorage.setItem("userId", result.data.userId);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now Login.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={handleSubmit}
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  handleSubmit,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            vlaue={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
  );
};
