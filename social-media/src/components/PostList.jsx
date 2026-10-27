import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/Post-list-store";

const PostList = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div class="card postCard" style={{ width: "30rem" }}>
      <div class="card-body">
        <h5 class="card-title">
          {post.title}{" "}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This post have been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};
export default PostList;
