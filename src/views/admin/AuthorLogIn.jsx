import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../common/Nav";
import axios from "axios";
import $ from "jquery";

const AuthorLogin = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const $login = $("#login");
    const $signupForm = $("#signup-form");

    $login.show();
    $signupForm.hide();
  }, []);

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(!showSignupForm);
    $("#signup-form, #login").slideToggle();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = { email, password };

    axios
      .post("http://api.mroadn.com/api/auth/login/", loginData)
      .then((res) => {
        const userData = res.data;
        console.log("Server responded back with:", userData);

        navigate("/admin/dashboard", { state: { userData } }); // Ensure you're passing it as an object
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-[50vh] md:h-[60vh] lg:h-[80vh]">
        <div
          id="login"
          className="form-container"
          style={{ display: showLoginForm ? "block" : "none" }}
        >
          <h1 className="text-center text-xl">Login</h1>
          <form className="flex flex-col items-center gap-4 pt-5">
            <input
              name="email"
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={handleInputChange}
              className="border-2 p-3 rounded focus:outline-none border-[var(--accent-color)]"
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleInputChange}
              className="border-2 p-3 rounded focus:outline-none border-[var(--accent-color)]"
            />

            <button
              onClick={handleLogin}
              className="px-6 py-4 bg-[black] text-[white] rounded"
            >
              Login
            </button>
            <div className="flex justify-between w-full">
              <Link className="hover:underline">Forgot Password?</Link>
              <Link className="hover:underline" onClick={toggleForms}>
                Sign up
              </Link>
            </div>
          </form>
        </div>

        <div
          id="signup-form"
          className="form-container"
          style={{ display: showSignupForm ? "block" : "none" }}
        >
          <h1 className="text-center text-xl">Sign up</h1>
          <form className="flex flex-col items-center gap-4 pt-5">
            <input
              placeholder="E-mail"
              type="email"
              className="border-2 p-3 rounded focus:outline-none border-[var(--accent-color)]"
            />
            <input
              placeholder="Password"
              type="password"
              className="border-2 p-3 rounded focus:outline-none border-[var(--accent-color)]"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="border-2 p-3 rounded focus:outline-none border-[var(--accent-color)]"
            />
            <button className="px-6 py-4 bg-[black] text-[white] rounded">
              Sign up
            </button>
            <div className="flex justify-between w-full">
              <Link to="#" className="hover:underline">
                Forgot Password?
              </Link>
              <Link className="hover:underline" onClick={toggleForms}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthorLogin;
