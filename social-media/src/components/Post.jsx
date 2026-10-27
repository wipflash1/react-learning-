import { useContext } from "react";
import PostList from "./PostList";
import { PostListContext } from "../store/Post-list-store";

const Post = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post) => (
        <PostList key={post.id} post={post}></PostList>
      ))}
    </>
  );
};
export default Post;
