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
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {
    const newPost = {
      id: action.payload.id,
      userId: action.payload.userId,
      title: action.payload.title,
      body: action.payload.body,
      reactions: action.payload.reactions,
      tags: action.payload.tags,
    };
    newPostList = [...currPostList, newPost];
  }
  return newPostList;
};

/* Defining Provider that will pass on to the children. or supplying the function they’ll actually use.*/
/* The provider makes that object available to components below it through context. */
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  /* AddPost flow */
  /* Component calls addPost(postData)
           ↓
addPost dispatches an action
           ↓
Reducer returns a new posts array
           ↓
React renders the updated list */
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const dispatchAddAction = {
      type: "ADD_POST",
      payload: {
        id: crypto.randomUUID(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    };
    dispatchPostList(dispatchAddAction);
    console.log(`Post Added ${postTitle} ${postBody} ${reactions} ${tags}`); //  implement the  actual adding logic here.Receives the new post’s data; adds a post.
  };

  const deletePost = (postId) => {
    const dispatchDeleteAction = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(dispatchDeleteAction);
    console.log(`Post Deleted by Id: ${postId}`); //  implement the  actual delete logic here.Receives a post’s ID; removes that post.
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

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: " Mumbai Diaries",
    body: "Hi friends ! I am going to Mumbai for vacations",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "enjoying", "Mumbai"],
  },
  {
    id: "2",
    title: "Banaras Diaries",
    body: "Hi friends ! I am going to Banaras for vacations",
    reactions: 2,
    userId: "user-10",
    tags: ["vacations", "enjoying", "Banaras"],
  },
  {
    id: "3",
    title: "Job Diaries",
    body: "Hi friends ! I am going to attend new office from now on",
    reactions: 15,
    userId: "user-12",
    tags: ["office", "learning", "corporate"],
  },
  {
    id: "4",
    title: "Chess Diaries",
    body: "Hi friends ! I am going to play chess from now on",
    reactions: 120,
    userId: "user-19",
    tags: ["chess", "creativity", "indooractivity"],
  },
];
export default PostListProvider;
