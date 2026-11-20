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

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const goHome = () => setSelectedTab("Home");
  const { user } = useAuth();

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
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
