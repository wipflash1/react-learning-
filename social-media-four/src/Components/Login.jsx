import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useRef, useState } from "react";

const Login = ({ onShowSignUp }) => {
  const [error, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      if (error.code === "auth/invalid-credential") {
        setError("Email or password is incorrect.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many attempts. Please wait a moment and try again.");
      } else if (error.code === "auth/network-request-failed") {
        setError("No internet connection. Check it and try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className="d-flex justify-content-center px-3 py-5">
      <div
        className="card border-secondary-subtle rounded-4 shadow-sm w-100 "
        style={{ maxWidth: "420px" }}
      >
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <img
              src="/postshelf-logo.png"
              alt=""
              width={140}
              className="mb-3"
            />
            <h1 className="h3 fw-bold mb-1">Welcome To PostShelf</h1>
          </div>
          <form onSubmit={handleEmailLogin}>
            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
              <label htmlFor="loginEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                ref={passwordRef}
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <label htmlFor="loginPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">
              Log in
            </button>
          </form>
          <p className="text-center text-body-secondary my-3">or</p>
          <button
            type="button"
            className="btn btn-outline-secondary w-100 py-2"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
          <button
            type="button"
            className="btn btn-link w-100 mt-3"
            onClick={onShowSignUp}
          >
            Don't Have an account? Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
