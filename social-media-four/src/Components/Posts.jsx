import { MdDelete } from "react-icons/md";
import { usePostList } from "../Store/post-list-context";

const Posts = ({
  postId,
  postUserId,
  postTitle,
  postBody,
  postTags = [],
  postViews,
  postReactions,
}) => {
  const { deletePost } = usePostList();
  return (
    <article className="card h-100 border border-secondary rounded-4 shadow-sm">
      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="small text-body-secondary">User #{postUserId}</span>
          <button
            type="button"
            className="btn btn-link text-danger p-0 lh-1"
            aria-label={`Delete post: ${postTitle}`}
            onClick={() => deletePost(postId)}
          >
            <MdDelete size={20} aria-hidden="true" />
          </button>
        </div>
        <h2 className="card-title h4 fw-bold">{postTitle}</h2>
        <p className="card-text">{postBody}</p>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {postTags.map((tag) => (
            <span
              key={tag}
              className="badge rounded-pill bg-primary-subtle text-primary-emphasis"
            >
              {tag}
            </span>
          ))}
        </div>
        <footer className="d-flex flex-wrap gap-3 border-top pt-2 mt-auto small text-body-secondary">
          <span>Likes {postReactions?.likes ?? 0}</span>
          <span>Dislikes {postReactions?.dislikes ?? 0}</span>
          <span>Views {postViews ?? 0}</span>
        </footer>
      </div>
    </article>
  );
};

export default Posts;
