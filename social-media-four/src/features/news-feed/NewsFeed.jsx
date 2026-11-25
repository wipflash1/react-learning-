import { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";
const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  console.log(news);

  if (loading) {
    return <LoadingSpinner />;
  }
  return <h1>News Update here </h1>;
};

export default NewsFeed;
