import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./HOC/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {
  const [isLogin, setIsLogin] = useState(null);
  // const [checkLogin, setCheckLogin] = useState(true);

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    };
    checkIfLogin();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
