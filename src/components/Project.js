import React from "react";
import { Link } from "react-router-dom";


import { Card, Button, Image } from "semantic-ui-react";

function Project(props) {
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
          
          <Link to={`/project/${props.id}/detail`}><Button color = "teal">Detail</Button></Link>
            
          
        </Card.Content>
      </Card>
    </>
  );
}

export default Project;

