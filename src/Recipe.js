import React from 'react';
import style from "./recipe.module.css"

export default function Recipe({title,type,images,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 className={style.heading} style={{fontSize: "41px"}}>{title}</h1>
            <h2>Cuisine-Type : {type}</h2>
            <h2 style={{color: 'red',textTransform: "capitalize"}}>ingredients :</h2>
            {ingredients.map((solo,index) =>(
               <ul key={index}>
                   <li className={style.text}>{solo.text}</li>
               </ul>
            ))}
            <img src={images} alt="likeness" className={style.images}/>
        </div>
    )
}
