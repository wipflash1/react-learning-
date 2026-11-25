import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PostListProvider from "./Store/Posts-List-store";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { useState } from "react";
import LoadSamplePosts from "./Components/LoadSamplePost";
import { useAuth } from "./Store/auth-context";
import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [authPage, setAuthPage] = useState("Login");
  const goHome = () => setSelectedTab("Home");
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    if (authPage === "SignUp") {
      // We're ON SignUp. Its button should go BACK to Login.
      return <SignUp onShowLogin={() => setAuthPage("Login")} />;
    }
    // We're ON Login. Its button should go TO SignUp.
    return <Login onShowSignUp={() => setAuthPage("SignUp")} />;
  }

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content-container">
          <Header />
          {selectedTab === "Home" && <PostList />}
          {selectedTab === "CreatePost" && <CreatePost />}
          {selectedTab === "LoadSamplePosts" && (
            <LoadSamplePosts onLoaded={goHome} />
          )}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
