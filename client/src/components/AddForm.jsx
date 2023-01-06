import axios from "axios";
import { useEffect } from "react";

const AddForm = () => {
  const addPosts = async (event) => {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:5000", {
      title: event.target[0].value,
      author: event.target[1].value,
      content: event.target[2].value,
    });

    return data != null && data;
  };

  return (
    <>
      <form onSubmit={(event) => addPosts(event)} className="form">
        <input
          type="text"
          name="tile"
          placeholder="title"
          className="form__item"
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="author"
          className="form__item"
        />
        <br />
        <textarea
          name="content"
          placeholder="Your text goes here"
          className="form_content"
        ></textarea>
        <br />
        <button className="form__submit">Ajouter</button>
      </form>
    </>
  );
};

export default AddForm;
