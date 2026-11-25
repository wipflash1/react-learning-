import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../Store/auth-context";

const SignUp = ({ onShowLogin }) => {
  const [error, setError] = useState(null);
  const { refreshUser } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(result.user, { displayName: name });
      refreshUser();
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists. Try logging in.");
      } else if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
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
        className="card border-secondary-subtle rounded-4 shadow-sm w-100"
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
            <h1 className="h3 fw-bold mb-1">Create your account</h1>
          </div>

          <form onSubmit={handleSignUp}>
            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                ref={nameRef}
                className="form-control"
                id="signupName"
                placeholder="Your name"
                autoComplete="name"
                required
              />
              <label htmlFor="signupName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                ref={emailRef}
                className="form-control"
                id="signupEmail"
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
              <label htmlFor="signupEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                ref={passwordRef}
                className="form-control"
                id="signupPassword"
                placeholder="Password"
                autoComplete="new-password"
                minLength={6}
                required
              />
              <label htmlFor="signupPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">
              Sign up
            </button>
          </form>

          <button
            type="button"
            className="btn btn-link w-100 mt-3"
            onClick={onShowLogin}
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
