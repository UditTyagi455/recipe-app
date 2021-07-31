import React,{useEffect,useState} from "react";
import Axios from "axios";
import "./App.css"
import Recipe from "./Recipe";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home =() =>{

  const APP_ID = '24a5e550';
   const key = '29dccce510b960fad2768741df114d26' ;
  
  
  const [recipe,setRecipe]=useState([]);
  const [values,setValues]=useState('');
  const [query,setQuery] =useState('peanuts');
  
  const fetchDetail =async () =>{
    try{
    const {data} = await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${key}`);
    setRecipe(data.hits);
    }catch(error){
      toast(error,{type: "error"})
    }
  }

  useEffect(() =>{
     fetchDetail();
  },[query]);

  const handleonChange =e =>{
     setValues(e.target.value);
  }
  const handleSubmit = e =>{
    e.preventDefault();
    if(values === ''){
     return toast("please! Enter the value",{type: "error"})
    }
    setQuery(values);
    setValues('');
  }

  return(
    <div className="App">
        
    <div >
      
      <form onSubmit={handleSubmit} className="search_div" >
      <ToastContainer /> 
      <input className="search_bar" placeholder="search here" type="text" value={values} onChange={handleonChange}/>
      <button className="search_btn" style={{cursor: "pointer",marginLeft: "8px"}}>Search</button>
      </form>
     </div>
     <div className='recipes'>
       {recipe.map((item,index) =>(
          <Recipe 
          key={index}
          title={item.recipe.label}
          type={item.recipe.cuisineType}
          images={item.recipe.image}
          ingredients={item.recipe.ingredients}
          />
       ))}
    </div>
    </div>
  )
}

export default Home;
