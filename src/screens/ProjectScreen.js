import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { Card } from "semantic-ui-react";
import axios from "axios";

function ProjectScreen() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <Card.Group itemsPerRow={4}>
        {projects.map((project) => (
          <Project
            id={project._id}
            title={project.title}
            desc={project.description}
            category={project.category}
            imgUrl={project.image}></Project>
        ))}
      </Card.Group>
    </>
  );
}

export default ProjectScreen;
