import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";

function EditScreen(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const editedData = { title: title, category: category };
      await axios.put(`/api/${props.match.params.id}/edit`,editedData);
      window.location.reload();
    } catch (error) {}
    await axios.put(`/api/${props.match.params.id}/edit`);
  };

  const preFetchData = async () => {
    const { data } = await axios.post(`/api/${props.match.params.id}/edit`);
    setTitle(data.title);
    setCategory(data.category);
    setDescription(data.description);
  };

  useEffect(() => {
    preFetchData();
  }, []);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "50%",
            height: "200px",
            backgroundColor: "#e8eaed",
          }}>
          <Form onSubmit={submitHandler}>
            <Form.Input
              label="Title"
              placeholder="edit title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Input
              label="Category"
              placeholder="edit category"
              name="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Form.Input
              label="Description"
              placeholder="edit Description"
              name="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Button primary content="Submit" />
          </Form>
        </div>
      </div>
    </>
  );
}

export default EditScreen;
