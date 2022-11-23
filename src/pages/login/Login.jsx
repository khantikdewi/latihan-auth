import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
      //   role,
    };
    // axios.post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/register", payload).then().catch(err)

    axios
      .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", payload)
      .then((res) => {
        setRes(res.data.access_token);
        console.log(res.data.access_token);
        setIsLogin(true);
        navigate("/dashboard");
        localStorage.setItem("Token", res.data.access_token);
      })
      .catch((err) => console.log(err));
    console.log(email, password);
  };

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div style={{ with: "100%" }}>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <h1>Login Page</h1>
        <div style={{ display: "flex", flexDirection: "Column" }}>
          <label>E-mail</label>
          <input onChange={(e) => handleEmail(e)} placeholder="Masukkan email" type="email" />
        </div>
        <div style={{ display: "flex", flexDirection: "Column" }}>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} placeholder="Masukkan password" type="password" />
        </div>
        <div>
          <button onClick={handleLogin} style={{ width: "100%", marginTop: "16px", padding: "8px" }}>
            Login
          </button>
        </div>
        {!!res.length && <h1>Selamat anda berhasil Login {res}</h1>}
      </div>
    </div>
  );
};

export default Login;
