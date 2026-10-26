import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import Post from "./components/Post";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [seletedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={seletedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content-container">
            <Header></Header>
            {seletedTab === "Home" ? <CreatePost /> : <Post />}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
