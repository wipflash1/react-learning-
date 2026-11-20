import { useState } from "react";
import { usePostList } from "../Store/post-list-context";
import LoadingSpinner from "./LoadingSpinner";

const LoadSamplePosts = ({ onLoaded }) => {
  const { addInitialPosts } = usePostList();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAPIButtonClicked = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://dummyjson.com/posts");
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      addInitialPosts(data.posts);
      onLoaded?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center gap-3 py-5"
      style={{ minHeight: "50vh" }}
    >
      <h2 className="h3 mb-0 text-center">Try a sample feed</h2>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAPIButtonClicked}
        >
          Load sample posts
        </button>
      )}

      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          Couldn't load sample posts: {error}
        </div>
      )}
    </section>
  );
};

export default LoadSamplePosts;
