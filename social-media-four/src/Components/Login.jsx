import { useState } from "react";
import { useAuth } from "../Store/auth-context";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

const validate = ({ email, password }) => {
  const errors = {};
  if (!email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email address, like name@example.com.";
  }
  if (!password) {
    errors.password = "Enter your password.";
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return errors;
};

const Login = ({ onLoggedIn }) => {
  const { login } = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user starts fixing it.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    login(values.email.trim());
    onLoggedIn?.();
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
            <h1 className="h3 fw-bold mb-1">Welcome back</h1>
            <p className="text-body-secondary mb-0">
              Log in to share posts on PostShelf.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">
                Email address
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "login-email-error" : undefined}
                autoFocus
              />
              {errors.email && (
                <div id="login-email-error" className="invalid-feedback">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <div className="input-group has-validation">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  value={values.password}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? "login-password-error" : undefined
                  }
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <div id="login-password-error" className="invalid-feedback">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
