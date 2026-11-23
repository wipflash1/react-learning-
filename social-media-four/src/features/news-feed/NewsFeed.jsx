import { useState, useEffect } from "react";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const key = import.meta.env.VITE_GNEWS_KEY;
    console.log(key ? "loaded " : " key missing");
  }, []);
  return <h1>News Update</h1>;
};
export default NewsFeed;
