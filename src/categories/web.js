import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";

function Web(props) {
  return (
    <Card>
      <Image src="" wrapped ui={false} />
      <Card.Content>
        <Card.Header>"Web Development"</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>This is my web development project</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={props.web}>
          <Button color="teal">Check out</Button>
        </Link>
      </Card.Content>
    </Card>
  );
}

export default Web;
