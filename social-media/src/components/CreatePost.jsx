import { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.trim().split(/\s+/).filter(Boolean);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
    console.log(`chalra h ye submit function`);
  };
  return (
    <>
      <form className="createPost" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="userId" class="form-label">
            User ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            placeholder="Enter your ID here.."
            class="form-control"
            id="userId"
          />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            placeholder="how are you feeling today.."
            class="form-control"
            id="title"
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            placeholder="tell us more about it ..."
            class="form-control"
            id="body"
          />
        </div>
        <div class="mb-3">
          <label for="reactions" class="form-label">
            Post Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            placeholder="how many people reacted on this.."
            class="form-control"
            id="reactions"
          />
        </div>
        <div class="mb-3">
          <label for="tags" class="form-label">
            Post Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            placeholder="go for # sing space.."
            class="form-control"
            id="tags"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
