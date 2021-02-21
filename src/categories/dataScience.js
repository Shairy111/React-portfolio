import React from 'react'
import { Link } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";

function DataScience(props) {
    return (
        <Card>
        <Image src="" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Data Science</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>DataScience project</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={props.dataScience}>
            <Button color="teal">Check out</Button>
          </Link>
        </Card.Content>
      </Card>
    )
}

export default DataScience
