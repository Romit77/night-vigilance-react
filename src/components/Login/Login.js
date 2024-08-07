import React, { useState } from "react";
import "./Login.css";
import JindalLogo from "../../assets/images/google-icon.png";
import NightVigilanceLogo from "../../assets/images/night-vigilance_logo-2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { z } from "zod";

const Login = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailSchema = z.string().email("Invalid email format");
  const passwordSchema = z
    .string()
    .min(8, "Password should be at least 8 characters long");

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
    resetForm();
  };

  const handleOpenSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
    resetForm();
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    resetForm();
  };

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
    setError("");
  };

  const switchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
    setError("");
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
        setIsLoading(false);
        return;
      }
    }
    // Simulate authentication
    setIsAuthenticated(true);
    handleCloseLoginModal();
  };

  const Login = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/users/login",
        {
          user_mail: email,
          password: password,
        }
      );

      if (response.status === 200) {
        toast.success("Login successful!");
        setIsAuthenticated(true);
        closeModal();
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    setError("");
    setIsLoading(true);
    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
        setIsLoading(false);
        return;
      }
    }

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/users/register",
        {
          userMail: email,
          password: password,
        }
      );

      if (response.status === 200) {
        toast.success("Signup successful!");
        closeModal();
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      <Toaster />
      <div className="login-container">
        <header>
          <div className="container-fluid position-sticky top-0">
            <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-fixed my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid pe-0">
                <a
                  className="navbar-brand font-weight-bolder ms-lg-0 ms-3"
                  href="/"
                >
                  <img
                    src={JindalLogo}
                    className="navbar-brand-img"
                    alt="Jindal Panther Logo"
                    width="10%"
                  />
                </a>
                <ul className="navbar-nav">
                  <li className="nav-item justify-content-right">
                    <a className="nav-link align-items-right" href="/">
                      <img
                        src={NightVigilanceLogo}
                        width="100"
                        className="img-fluid"
                        alt="Night Vigilance Logo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <main className="main-content">
          <section>
            <div className="page-header index-content">
              <div className="container-fluid main-container">
                <div className="row">
                  <div className="col-md-6 d-none d-md-block basic-shape-polygon">
                    <div className="oblique position-absolute top-0 h-100 me-n8">
                      <div
                        className="oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                        style={{
                          backgroundImage: "url('../../assets/images/bg.jpg')",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 p-5 col-md-6 d-flex flex-column">
                    <div
                      className="card card-plain pb-5"
                      style={{ border: "none", marginTop: "20%" }}
                    >
                      <div className="col text-center">
                        <img
                          src={NightVigilanceLogo}
                          width="100"
                          className="img-fluid"
                          alt="Night Vigilance Logo"
                        />
                      </div>
                      <div className="card-body p-2 px-4 mt-5">
                        {!isAuthenticated ? (
                          <div className="text-center">
                            <button
                              className="btn btn-dark mt-5 mx-2 px-5"
                              onClick={handleOpenLoginModal}
                            >
                              Sign In
                            </button>
                          </div>
                        ) : (
                          <>
                            <h6 className="font-weight-bolder text-dark text-center">
                              Click on the below SSO Link
                            </h6>
                            <div className="text-center">
                              <button
                                className="btn btn-dark mt-5 mx-2"
                                onClick={() => navigate("/dashBoard")}
                              >
                                Go to Admin Dashboard
                              </button>
                              <button
                                className="btn btn-dark mt-5"
                                onClick={() => navigate("/UserDashboard")}
                              >
                                Go to User Dashboard
                              </button>
                            </div>
                          </>
                        )}
                        <p
                          className="mt-3 text-center"
                          style={{ fontFamily: "roboto" }}
                        >
                          © 2024 Jindal Steel & Power | All Rights Reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer p-3 bg-dark fixed-bottom">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-12 mb-lg-0 py-1 text-center">
                <span className="text-white">
                  &copy; {new Date().getFullYear()} Jindal Steel & Power | All
                  Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </footer>

        {isLoginModalOpen && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container">
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <h2>Login to your account</h2>
              <p>Enter your email and password to log in</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modal-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="modal-input"
              />
              {error && <p className="error-message">{error}</p>}
              <button
                className="btn btn-dark w-50 m-4"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging In..." : "Log In"}
              </button>
              <p>
                Don't have an account?{" "}
                <button className="btn-link" onClick={switchToSignup}>
                  Sign Up
                </button>
              </p>
              <p>
                By clicking continue, you agree to our{" "}
                <a href="/terms">Terms of Service</a> and{" "}
                <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>
          </div>
        )}
        {isSignupModalOpen && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container">
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <h2>Sign Up for a new account</h2>
              <p>Enter your email and password to sign up</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modal-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="modal-input"
              />
              {error && <p className="error-message">{error}</p>}
              <button
                className="btn btn-dark w-50 m-4"
                onClick={handleSignup}
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
              <p>
                Already have an account?{" "}
                <button className="btn-link" onClick={switchToLogin}>
                  Log In
                </button>
              </p>
              <p>
                By clicking continue, you agree to our{" "}
                <a href="/terms">Terms of Service</a> and{" "}
                <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
