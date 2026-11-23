import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = ({ onShowSignUp }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
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
            <h1 className="h3 fw-bold mb-1">Welcome back</h1>
          </div>
          <button
            type="button"
            className="btn btn-primary w-100 py-2"
            onClick={handleLogin}
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
