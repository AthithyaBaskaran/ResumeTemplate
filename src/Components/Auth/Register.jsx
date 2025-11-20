import { useState } from "react";
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import "../../assets/CSS/Auth/Register.css";
import { registerUser } from "../../api/authApi";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    role: "USER"
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(formData);
      if (response) {
        toast.success("User Registered Successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
      return response.data;
    } catch (error) {
      toast.error(error.message || "Registration Failed");
      console.error("API Error:", error);
    }
  };




  return (
    <>
      <Toaster position="top-right" />
      <div className="register-container">
        <div className="register-form-wrapper">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>User Name:</label>
                <input type="text" name="username" onChange={handleChange} placeholder="Enter User Name" />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} placeholder="Enter Email" />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} placeholder="Enter Password" />
              </div>

              <div className="form-group">
                <label>Mobile No:</label>
                <input type="text" name="phoneNo" onChange={handleChange} placeholder="Enter Mobile No" />
              </div>

              <div className="form-group">
                <label>Role:</label>
                <select name="role" value={formData.role} onChange={handleChange}>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">Register</button>

              <div className="login-redirect">
                Already have an account? <Link to="/Login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;
