import { useAuth } from "../Store/auth-context";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="container head-container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none fs-4 fw-bold"
          >
            PostShelf
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span className="small text-body-secondary text-truncate">
              Hi, <strong>{user.name}</strong>
            </span>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
