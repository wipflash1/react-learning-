import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PostListProvider from "./Store/Posts-List-store";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import { useState } from "react";
import LoadSamplePosts from "./Components/LoadSamplePost";
import { useAuth } from "./Store/auth-context";
import LoadingSpinner from "./Components/LoadingSpinner";
import NewsFeed from "./features/news-feed/NewsFeed";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [authPage, setAuthPage] = useState("Login");
  const goHome = () => setSelectedTab("Home");
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Login />;
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
          {selectedTab === "News" && <NewsFeed />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
