import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/SpecialtiesContextProvider";
import "./Styles/Comments.css";

const Comments = () => {
  const { postComment, editComment, deleteComment, oneComment } = useProducts();
  const [body, setBody] = useState();
  console.log(oneComment);
  const { id } = useParams();

  function handleSave() {
    if (!body.trim()) {
      alert("Зполните все поля!");
      return;
    }

    let formData = new FormData();
    formData.append("body", body);
    formData.append("doctor", id);
    postComment(formData);
  }

  function render() {
    return oneComment;
  }
  //   React.useEffect(() => {
  //     setError(false);
  //   }, []);
  return (
    <div className="bodyComments">
      <div className="comment__container">
        <h1 className="comment__title">Add a new comment</h1>
        <div className="comment__body">
          <img
            src="https://api.adorable.io/avatars/50/arefn@codepen"
            className="comment__avatar"
            alt="avatar"
          />
          <div>
            <textarea
              className="comment__textarea"
              placeholder="Type your message ..."
              rows="8"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
            <div className="comment__post">
              <div className="comment__info">Some HTML is OK.</div>
              <div>
                <button className="comment__send" onClick={handleSave}>
                  Post Comment
                </button>
                <div>
                  <p>{oneComment.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
