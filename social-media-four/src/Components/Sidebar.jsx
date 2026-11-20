import { MdCloudDownload, MdHome, MdPostAdd } from "react-icons/md";

const tabs = [
  { id: "Home", label: "Home", Icon: MdHome },
  { id: "CreatePost", label: "Create Post", Icon: MdPostAdd },
  { id: "LoadSamplePosts", label: "Load Sample Posts", Icon: MdCloudDownload },
];

const SideBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary side-content">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src="/postshelf-logo.png" alt="PostShelf home" width={180} />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = selectedTab === id;
          return (
            <li className="nav-item" key={id}>
              <button
                type="button"
                className={`nav-link link-body-emphasis w-100 text-start d-flex align-items-center ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setSelectedTab(id)}
              >
                <Icon size={16} className="me-2" aria-hidden="true" />
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
