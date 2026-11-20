import { createContext, useContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

export const usePostList = () => useContext(PostListContext);
