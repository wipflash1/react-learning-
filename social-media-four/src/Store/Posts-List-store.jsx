import { useReducer } from "react";
import { PostListContext } from "./post-list-context";

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);
    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "ADD_INITIAL_POSTS": {
      // Keep posts the user already has; only add sample posts not yet in the list.
      const existingIds = new Set(currPostList.map((post) => post.id));
      const newPosts = action.payload.filter(
        (post) => !existingIds.has(post.id),
      );
      return [...currPostList, ...newPosts];
    }
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({ type: "ADD_INITIAL_POSTS", payload: posts });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
