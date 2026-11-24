const SignUp = ({ onShowLogin }) => {
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

          {/* Sign-up logic (Firebase) is added in Step 2. */}
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
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
