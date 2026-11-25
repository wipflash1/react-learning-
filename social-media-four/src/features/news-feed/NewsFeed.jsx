import { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError("Couldn't load today's news. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return <h1>News Update </h1>;
};

export default NewsFeed;
