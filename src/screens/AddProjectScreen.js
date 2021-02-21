import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddProjectScreen() {
  const fileInput = useRef(null);
  const [title, setTitle] = useState("");
  const [category , setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [detaildesc, setDetaildesc] = useState("");

  const [tech, setTech] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("/api/projects/add", {
        title: title,
        category: category,
        desc: desc,
        tech: tech,
        detaildesc: detaildesc,
        link: link,
        image: image,
      })
      .then((res) => {
        console.log(res.data.message);
        setLoading(false);
        setError(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1500);
      });
  };

  const inputEl = useRef(null);
  var addToList = (e) => {
    e.preventDefault();
    setTech([...tech, inputEl.current.value]);
    inputEl.current.value = "";
  };

  const uploadFileHandler = async (e) => {
    const file = fileInput.current.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  } else if (error) {
    return (
      <>
      <div class="alert alert-danger" role="alert">
        Couldn't create a project a new one
      </div>
      
      </>
    );
  } else {
    return (
      <div>
      
        <h1>Add PROJECT</h1>
        <form onSubmit={submitHandler}>
          {success ? (
            <div class="alert alert-success" role="alert">
              Project created Successfully
            </div>
          ) : (
            ""
          )}
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              class="form-control"
              id="title"
              type="text"
              placeholder="enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Category
            </label>
            <input
              class="form-control"
              id="Category"
              type="text"
              placeholder="Project Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="techstack">
              Tech Stack
            </label>
            <input
              class="form-control"
              id="techstack"
              ref={inputEl}
              type="text"
              placeholder="enter tech list"></input>
            <button
              style={{ marginTop: "1em" }}
              className="btn btn-primary"
              type="button"
              onClick={addToList}>
              Add to List
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="desc">
              description
            </label>
            <textarea
              class="form-control"
              id="desc"
              type="text"
              placeholder="enter project description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="img">
              Image url
            </label>
            <input
              class="form-control"
              id="img"
              type="text"
              placeholder="enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}></input>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="imgFile">
              pick Image
            </label>
            <input
              class="form-control"
              id="imgFile"
              label="choose image"
              type="file"
              ref={fileInput}
              onChange={uploadFileHandler}></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="detailDesc">
              Details
            </label>
            <textarea
              class="form-control"
              id="detailDesc"
              type="text"
              placeholder="enter project detail description"
              value={detaildesc}
              onChange={(e) => setDetaildesc(e.target.value)}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="link">
              LINK
            </label>
            <input
              class="form-control"
              id="link"
              type="text"
              placeholder="enter project link"
              value={link}
              onChange={(e) => setLink(e.target.value)}></input>
          </div>

          <div>
            <label></label>
            <button className="Cardbutton" type="submit">
              ADD
            </button>
            <Link to="/Admin">
              <button className="Cardbutton">GO TO ADMIN PANEL</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProjectScreen;
// {setTimeout(() => {
//   <div class="alert alert-success" role="alert">
//     Project created Successfully
//   </div>;
// }, 3000)}
