import { useRef } from "react";
import { usePostList } from "../Store/post-list-context";

const CreatePost = () => {
  const { addPost } = usePostList();

  const userIdElement = useRef(null);
  const titleElement = useRef(null);
  const bodyElement = useRef(null);
  const tagsElement = useRef(null);
  const likesElement = useRef(null);
  const dislikesElement = useRef(null);
  const viewsElement = useRef(null);

  const handleAddClicked = (event) => {
    event.preventDefault();

    const newPost = {
      id: crypto.randomUUID(),
      userId: Number(userIdElement.current.value),
      title: titleElement.current.value.trim(),
      body: bodyElement.current.value.trim(),
      tags: [
        ...new Set(
          tagsElement.current.value
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        ),
      ],
      reactions: {
        likes: Number(likesElement.current.value),
        dislikes: Number(dislikesElement.current.value),
      },
      views: Number(viewsElement.current.value),
    };

    addPost(newPost);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleAddClicked}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          ref={userIdElement}
          id="userId"
          type="number"
          className="form-control"
          min="1"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={titleElement}
          id="title"
          type="text"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          ref={bodyElement}
          id="body"
          className="form-control"
          rows={4}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          ref={tagsElement}
          id="tags"
          type="text"
          className="form-control"
          placeholder="react, practice, vite"
        />
      </div>

      <fieldset className="mb-3">
        <legend className="fs-6">Reactions</legend>

        <div className="row g-3">
          <div className="col">
            <label htmlFor="likes" className="form-label">
              Likes
            </label>
            <input
              ref={likesElement}
              id="likes"
              type="number"
              className="form-control"
              min="0"
              defaultValue={0}
              required
            />
          </div>

          <div className="col">
            <label htmlFor="dislikes" className="form-label">
              Dislikes
            </label>
            <input
              ref={dislikesElement}
              id="dislikes"
              type="number"
              className="form-control"
              min="0"
              defaultValue={0}
              required
            />
          </div>
        </div>
      </fieldset>

      <div className="mb-3">
        <label htmlFor="views" className="form-label">
          Views
        </label>
        <input
          ref={viewsElement}
          id="views"
          type="number"
          className="form-control"
          min="0"
          defaultValue={0}
          required
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
