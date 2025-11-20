import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import "../../assets/CSS/Auth/login.css";
import { LoginUser } from "../../api/authApi";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUser(formData);
      if (response) {
        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      return response.data;
    }
    catch (error) {
      toast.error(error.message || "Login Failed");
      console.error("API Error:", error);
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <div className="login-container">
        <div className="login-form-wrapper">
          <h1>login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" onChange={handleChange} placeholder="Enter Email" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" onChange={handleChange} placeholder="Enter Password" />
            </div>
            <button type="submit" className="submit-btn">Login</button>
            <p className="auth-link">
              Don't have an account? <span onClick={() => navigate("/register")} className="link-text">Create Account</span>
            </p>

          </form>

        </div>
      </div>
    </>
  )
}

export default Login
