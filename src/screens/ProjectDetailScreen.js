import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectDetailScreen(props) {
  const [title, setTitle] = useState("");
  const [allData, setAllData] = useState("");
  const [detailDesc , setDetailDesc] = useState("");
  const [category , setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [tech , setTech] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const project = await axios.get(
        `/api/project/${props.match.params.id}/detail`
      );

      setTitle(project.data.title);
      setDetailDesc(project.data.detail.detailDesc)
      setTech(project.data.detail.techStack)
      setCategory(project.data.category)
      setAllData(project.data);
      setImage(project.data.image)
      setLoading(false);
    }

    getData();
  }, [title]);

  // const fetchProjectDetail = async(e) => {
  //     const project = await axios.get(`/api/project/${props.match.params.id}/detail`);
  //     console.log(project.data.title)
  // }

  if (loading) {
    return (
      <div class="text-center">
        <div class="spinner-border" role="status"></div>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/Projects">
          <button>Click</button>
        </Link>

        <h1>this the details page of {title} </h1>
        <h1>Category</h1>
        <p>{category}</p>
        <img style={{width:"100vh",display:"flex" , flexWrap:'wrap'}} src = {image}/>
        <h1>Description</h1>
        <p>{allData.description}</p>

        <h2>Tech List</h2>
        <ul>
          {tech.map((item, b) => (
            <li key={b}>{item}</li>
          ))}
        </ul>
        <h1>Project Details</h1>
        <p>
            {detailDesc}
        </p>
      </div>
    );
  }
}

export default ProjectDetailScreen;
