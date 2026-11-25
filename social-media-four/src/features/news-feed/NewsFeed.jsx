import { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";
import NewsCard from "./NewsCard";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchNews = async () => {
      setLoading(true);
      const key = import.meta.env.VITE_GNEWS_KEY;
      const url = `https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=${key}`;

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`GNews error: ${res.status}`);
        }
        const data = await res.json();
        setNews(data.articles);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError("Couldn't load today's news. Please try again later.");
        console.error(error);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchNews();

    return () => controller.abort();
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
  return (
    <div>
      <h2 className="mb-3">Today's News</h2>
      <div className="row g-3">
        {news.map((article) => (
          <div className="col-12 col-md-6 col-lg-4" key={article.url}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
