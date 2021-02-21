import React from "react";
import axios from "axios";
import { Card, Button, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

function Admin(props) {
  const deleteClickHandler = async () => {
    await axios.delete(`/api/${props.id}`);
    window.location.reload();
  };
  return (
    <>
      <Card>
        <Image src={props.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{props.category}</span>
          </Card.Meta>
          <Card.Description>{props.desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group>
            <Link to={`/Admin/${props.id}/Edit`}>
               <Button color="yellow">Edit</Button>
            </Link>
            
            <Button.Or />
            <Button color="red" onClick={deleteClickHandler}>
              Delete
            </Button>
          </Button.Group>
          )
        </Card.Content>
      </Card>
    </>
  );
}

export default Admin;

