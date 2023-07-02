import React from "react";

function Category({category}){
    return (
        <div key={category.id} className='category-container'>
          <img src={category.imageUrl} alt={category.title} className='background-image'/>
          <div className='category-body-container'>
            <h2>{category.title}</h2>
            <div>Shop Now</div>
          </div>
        </div>
    )
}

export default Category;