import React from "react";
import Web from '../categories/web'
import DataScience from '../categories/dataScience'


function CategoryScreen(props) {
  return (
    <>
    <Web web = {props.web}/>
    <DataScience dataScience = {props.dataScience}/>

    </>
  );
}

export default CategoryScreen;
