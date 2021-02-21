import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import CategorySpecific from "../components/CategorySpecific";

function CategoryDetailScreen(props) {

    
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [projects, setProjects] = useState([]);
   

    useEffect(() => {
        async function getData() {
          setLoading(true);
          const {data} = await axios.get(
            `/api/category/${props.match.params.name}`
          );
          
         
          setProjects(data)
          setLoading(false);
        }
    
        getData();
      }, []);
    return (
        <>
        <Card.Group itemsPerRow={4}>
        {projects.map((project) => (
                  <CategorySpecific
                    id={project._id}
                    title={project.title}
                    category={project.category}
                    desc={project.description}
                    imgUrl={project.image}
                    link={project.link}></CategorySpecific>
                ))}



        </Card.Group>
   
        </>
    )
}

export default CategoryDetailScreen
