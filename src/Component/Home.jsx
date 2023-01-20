import React from 'react'
import background from '../Images/background.png';
import { useNavigate, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import '../App.css'
const Home = () => {
    const navigate = useNavigate();
  return (
    <>
   

     
    <div className="box" style={{ backgroundImage: `url(${background})` }} >
        <div className='box1'>
        <div className='text'><h4>Social media shared today, tomorrow or by location</h4></div>
        <div className='text1'><h4>Discover with Maze</h4></div>
<div className='button'>
    <Button
        className='signup'
        variant="contained"   
         color="primary"               
         onClick={() => navigate(`/signup/`)}              
           >
                 Create Account
    </Button>  
    </div>
    <div className='text2'><h4>or</h4></div>
    <div className='button1'>
    <Button
        className='login'
        variant="contained"   
         color="primary"               
         onClick={() => navigate(`/login/`)}              
           >
                 Login
    </Button>  
    </div>
    </div>  
    </div>       
    
    </>
  )
  };
export default Home;