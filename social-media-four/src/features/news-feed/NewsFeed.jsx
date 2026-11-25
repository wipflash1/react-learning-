import { useState, useEffect } from "react";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const key = import.meta.env.VITE_GNEWS_KEY;
      const url = `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${key}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`GNews error: ${res.status}`);
        }
        const data = await res.json();
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);
  console.log(news);
  return <h1>News Update</h1>;
};

export default NewsFeed;
