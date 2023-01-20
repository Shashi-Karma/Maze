import React from "react";
// import Header from './Components/Header';
import { Link, useNavigate } from 'react-router-dom'; 
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "../TextField";
import "../Component/login.css";
import background from "../Images/background.png";
import Checkbox from "./Cheakbox";
import Button from "@mui/material/Button";
import { useEffect } from "react";


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "white",
  },
};
const defaultFormFields = {
  email: "",
  password: ""
};
const passwordRules =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required"),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
	const [showPassword, setShowPassword] = useState(false);
	const { email, password } = formFields;
	const Navigate = useNavigate();
	useEffect(()=> {
    const auth = localStorage.getItem('user');
    if (auth){
      Navigate('/users')
    }
  },[])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.warn(formFields)
    let result = await fetch('http://localhost:5000/login',{
      method:'post',
      body: JSON.stringify({ email, password}),
      headers:{
        'Content-Type':'application/json'
      
      }
    });
    result = await result.json()
    console.warn(result);
    if(result.auth){
          localStorage.setItem("user",JSON.stringify(result.user));
          localStorage.setItem("token",JSON.stringify(result.auth));
          Navigate("/users")
    }else{
      alert("please enter correct details")
    }
  }

  const classes = useStyles();
//   const [change, setChange] = useState(false);
// function buttonHandler(){
//   setChange(!change)
// }
  

  return (
    <div className="box" style={{ backgroundImage: `url(${background})` }}>
      <div className="box5">
        
        <div className="box6">
          <Grid container>
            <Grid item xs={12}>
              <Container maxWidth="md">
                <div className={classes.formWrapper}>
                  <Formik
                    initialValues={{
                      ...defaultFormFields,
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    <Form onSubmit={handleSubmit}>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <Typography>
                            <h2 >Login</h2>
                          </Typography>
                        </Grid>


                        <Grid item xs={12}>
                          <Textfield labelText="Email" type="email" name="email" value={email} onChange={handleChange} required />
                        </Grid>

                        
                        <Grid item xs={12}>
                          <Textfield
                            name="password"
                            type="password"
                            labelText="Password"
                            value={password} 
                            onChange={handleChange}
                          />
                        </Grid>



                        <Grid item xs={12}>
                          <Checkbox
                            name="remember me"
                            type="checkbox" 
                            label="Remember Me "
                          />
                        </Grid>

                        <Grid item xs={12}>
                            
                            
                          <Button className="login-button" type="submit" variant="contained" color="primary">
                            Login
                          </Button>
                        </Grid>
                      </Grid>
                      <span className='already-login'>
                      Don't have an account?
                      <Link to='/signup'> SignUp </Link>
                    </span>
                    </Form>
                  </Formik>
                </div>
              </Container>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Login;

