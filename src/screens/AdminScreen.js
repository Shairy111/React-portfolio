import React, { useState, useEffect } from "react";
import Admin from "../components/Admin";
import { Button, Card } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminScreen() {
  const [projects, setProjects] = useState([]);
  const fetchProject = async (e) => {
    try {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <>
      <Link to="/Admin/Add">
        <Button style={{marginTop:"1em" , marginBottom:"1em"}} primary>Add project</Button>
      </Link>

      <Card.Group itemsPerRow={4}>
        {projects.map((project) => (
          <Admin
            id={project._id}
            title={project.title}
            desc={project.description}
            category={project.category}
            imgUrl={project.image}></Admin>
        ))}
      </Card.Group>
    </>
  );
}

export default AdminScreen;
