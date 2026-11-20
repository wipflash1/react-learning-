import Posts from "./Posts";
import Message from "./Message";
import { usePostList } from "../Store/post-list-context";

const PostList = () => {
  const { postList } = usePostList();

  if (postList.length === 0) {
    return <Message />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mx-0 py-3">
      {postList.map((post) => (
        <div className="col" key={post.id}>
          <Posts
            postId={post.id}
            postUserId={post.userId}
            postTitle={post.title}
            postBody={post.body}
            postTags={post.tags}
            postReactions={post.reactions}
            postViews={post.views}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
