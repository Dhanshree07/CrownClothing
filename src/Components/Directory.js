import React from "react";
import Category from "./Category";

function Directory({categories}){
    return (
        <div className="categories-container">
      {categories.map((category)=>(
        <Category category={category}/> 
      ))}
    </div>
    )
}

export default Directory;