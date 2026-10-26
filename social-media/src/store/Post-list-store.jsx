import { createContext, useReducer } from "react";
/* Creating the context  */
/* The context is the channel; this object is the value you send through it. */
export const PostListContext = createContext({
  postList: [],
  addPost: () => {}, // describing what consumers can expect
  deletePost: () => {},
});
/* reducer Function */
const postListReducer = (currPostList, action) => {
  return currPostList;
};

/* Defining Provider that will pass on to the children. or supplying the function they’ll actually use.*/
/* The provider makes that object available to components below it through context. */
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  /* AddPost flow */
  /* Component calls addPost(postData)
           ↓
addPost dispatches an action
           ↓
Reducer returns a new posts array
           ↓
React renders the updated list */
  const addPost = () => {
    console.log(`Post Added`); //  implement the  actual adding logic here.Receives the new post’s data; adds a post.
  };
  const deletePost = () => {
    console.log(`Post Deleted`); //  implement the  actual delete logic here.Receives a post’s ID; removes that post.
  };
  return (
    <PostListContext.Provider
      // Now you can pass addPost  and  deletePost through the provider.
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: " going to mumbai",
    body: "Hi friends ! I am going to Mumbai for vacations",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "enjoying", "Mumbai"],
  },
  {
    id: "2",
    title: " going to Banaras",
    body: "Hi friends ! I am going to Banaras for vacations",
    reactions: 2,
    userId: "user-10",
    tags: ["vacations", "enjoying", "Banaras"],
  },
  {
    id: "3",
    title: "naukri lag gyi bhai",
    body: "Hi friends ! I am going to attend new office from now on",
    reactions: 15,
    userId: "user-12",
    tags: ["office", "learning", "corporate"],
  },
];
