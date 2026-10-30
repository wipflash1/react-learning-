import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Post from "./components/Posts";

function App() {
  return (
    <>
      <div className="app-container">
        <SideBar></SideBar>
        <div className="content-container">
          <Header></Header>
          <Post></Post>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
