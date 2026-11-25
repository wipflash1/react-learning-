const NewsCard = ({ article }) => {
  return (
    <div className="card h-100 shadow-sm">
      {article.image && (
        <img
          src={article.image}
          className="card-img-top"
          alt=""
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text text-body-secondary">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm mt-auto"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
