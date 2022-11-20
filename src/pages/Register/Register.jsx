import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
      //   role,
    };
    // axios.post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/register", payload).then().catch(err)

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        setRes(res.data.token);
        console.log(res);
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
        <h1>Register Page</h1>
        <div style={{ display: "flex", flexDirection: "Column" }}>
          <label>E-mail</label>
          <input onChange={(e) => handleEmail(e)} placeholder="Masukkan email" type="email" />
        </div>
        <div style={{ display: "flex", flexDirection: "Column" }}>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} placeholder="Masukkan password" type="password" />
        </div>
        <div>
          <button onClick={handleRegister} style={{ width: "100%", marginTop: "16px", padding: "8px" }}>
            Register
          </button>
        </div>
        {!!res.length && <h1>Selamat anda berhasil Registrasi {res}</h1>}
      </div>
    </div>
  );
};

export default Register;
