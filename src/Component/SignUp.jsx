// import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { FormControl, FormControlLabel, Checkbox, InputAdornment, IconButton, Input } from '@mui/material';
// import { Container, Grid, Typography } from "@material-ui/core";
// import { Link, useNavigate } from 'react-router-dom';       
// import Textfield from "../TextField";
// import "../Component/SignUp.css";
// import background from "../Images/background.png";
// import Button from "@mui/material/Button";



// const useStyles = makeStyles((theme) => ({
//   formWrapper: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(8),
//   },
// }));

// const styles = {
//   root: {
//     background: "black",
//   },
//   input: {
//     color: "white",
//   },
// };
// const INITIAL_FORM_STATE = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   password: "",
//   confirmPassword: "",
 
// };
// const passwordRules =
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
// const FORM_VALIDATION = Yup.object().shape({
//   firstName: Yup.string().required("Required"),
//   lastName: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email.").required("Required"),
//   phone: Yup.number()
//     .integer()
//     .typeError("Please enter a valid phone number")
//     .required("Required"),

//   password: Yup.string()
//     .min(5)
//     .matches(passwordRules, { message: "Please create a stronger password" })
//     .required("Required"),
//   confirmPassword: Yup.string().oneOf(
//     [Yup.ref("password"), null],
//     "Password must match"
//   ),
//   termsOfService: Yup.boolean()
//     .oneOf([true], "The terms and conditions must be accepted.")
//     .required("The terms and conditions must be accepted."),
// });

// const SignUp = () => {
  
//   const classes = useStyles();
//   const [change, setChange] = useState(false);
// function buttonHandler(){
//   setChange(!change)
// }
  

//   return (
//     <div className="box" style={{ backgroundImage: `url(${background})` }}>
//       <div className="box3">
        
//         <div className="box4">
//           <Grid container>
//             <Grid item xs={12}>
//               <Container maxWidth="md">
//                 <div className={classes.formWrapper}>
//                   <Formik
//                     initialValues={{
//                       ...INITIAL_FORM_STATE,
//                     }}
//                     validationSchema={FORM_VALIDATION}
//                     onSubmit={(values) => {
//                       console.log(values);
//                     }}
//                   >
//                     <Form onSubmit={(e) => onSubmit(e)}
//                     >
//                       <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                           <Typography>
//                             <h2>Create Account</h2>
//                             <span>For business, band or celebrity.</span>
//                           </Typography>
//                         </Grid>

//                         <Grid item xs={6}>
//                           <Textfield name="firstName" label="First Name" />
//                         </Grid>

//                         <Grid item xs={6}>
//                           <Textfield name="lastName" label="Last Name" />
//                         </Grid>

//                         <Grid item xs={6}>
//                           <Textfield name="email" label="Email" />
//                         </Grid>

//                         <Grid item xs={6}>
//                           <Textfield name="phone" label="Phone number" />
//                         </Grid>
//                         <Grid item xs={6}>
//                           <Textfield
//                             name="password"
//                             type="password"
//                             label="Password"
//                           />
//                         </Grid>

//                         <Grid item xs={6}>
//                           <Textfield
//                             name="confirmPassword"
//                             type="password"
//                             label="Confirm Password"
//                           />
//                         </Grid>


//                         {/* <Grid item xs={12}>
//                           <Checkbox
//                             name="termsOfService"
//                             onChange={buttonHandler}
//                             label="I agree to all the Terms and Privacy policy "
//                           />
                          
//                         </Grid> */}
//                         {/* <FormControlLabel control={<Checkbox color="success" />} label="Remember me" />
//                         <FormControlLabel control={<Checkbox color="success" required />} label={`I agree to all the Terms and Privacy policy`} required />
//                         <Grid item xs={12}>
                            
                            
//                           <Button disabled={change} type="submit" variant="contained" color="primary">
//                             Login
//                           </Button>
//                         </Grid> */}
//                         <div className='signup-checkbox'>
// 						<FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
// 						<FormControlLabel control={<Checkbox color="primary" required />} label={`I agree to all the Terms and Privacy policy`} required />
// 					</div>
					
					
//                       </Grid>
//                       <Button onClick={collectData}className='signup-login-button' type='submit' variant="contained" size="lg">
// 						Login
// 					</Button>
//                     <span className='already-login'>
// 						Already have an account?
// 						<Link to='/login'> Log In </Link>
// 					</span>
//                     </Form>
//                   </Formik>
//                 </div>
//               </Container>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import background from '../Images/background.png';
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { TextField } from '../TextField'

// const SignUp = () => {
//     let navigate = useNavigate();
//     const [user, setUser] = useState({
//         First_name: "",
//         Last_name: "",
//         email: "",
//         phone: "",
//         Password: ""
//     });

//     const { First_name, Last_name, email, phone, Password } = user;
//     const onInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post("https://6391cc88ac688bbe4c52e6b2.mockapi.io/test", user);
//         navigate("/");
//     };

//     const validate = Yup.object({
//         First_Name: Yup.string()
//             .min(4, "Must be 4 charecters or more")
//             .max(15, "Must be 15 characters or less")
//             .required("Required"),
//         Last_name: Yup.string()
//             .min(4, "Must be 4 charecters or more")
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//         email: Yup.string()
//             .email("Enter valid Email")
//             .required("Email is required"),
//         phone: Yup.string()
//             .min(6, "Number must be at least 6 charaters")
//             .required("Number is required"),
//         Password: Yup.string()
//             .min(6, "Number must be at least 6 charaters")
//             .required("Number is required")
//     });
//     return (
//         <Formik
//             initialValues={{
//                 First_name: "",
//                 Last_name: "",
//                 email: "",
//                 phone: "",
//                 Password: ""
//             }}
//             validationSchema={validate}
//             onSubmit={(values) => {
//                 console.log(values);
//             }}
//         ><div className="box" style={{ backgroundImage: `url(${background})` }} >
//             <div className="container">
//                 <div className="w-75 mx-auto shadow p-5">
//                     <h2 className="text-center mb-4">Create account</h2>
//                     <Form onSubmit={(e) => onSubmit(e)}>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your Name"
//                                 name="name"
//                                 value={First_name}
//                                 onChange={(e) => onInputChange(e)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your Last name"
//                                 name="Last_name"
//                                 value={Last_name}
//                                 onChange={(e) => onInputChange(e)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="email"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your E-mail Address"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => onInputChange(e)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your Phone Number"
//                                 name="phone"
//                                 value={phone}
//                                 onChange={(e) => onInputChange(e)}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className="form-control form-control-lg"
//                                 placeholder="Enter Your Password"
//                                 name="Password"
//                                 value={Password}
//                                 onChange={(e) => onInputChange(e)}
//                             />
//                         </div>
//                         <button className="btn btn-primary btn-block">Login</button>
//                     </Form>
//                 </div>
//             </div>
//             </div>
//         </Formik>

//     );
// };

// export default SignUp;
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormControlLabel, Checkbox, InputAdornment, IconButton, Input } from '@mui/material';
import { Container, Grid, Typography } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';       
import Textfield from "../TextField";
import "../Component/SignUp.css";
import background from "../Images/background.png";
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
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	password: '',
	confirmPassword: ''
}
const passwordRules =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),

  password: Yup.string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
	const [showPassword, setShowPassword] = useState(false);
	const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formFields;
	const Navigate = useNavigate();
  useEffect(()=> {
    const auth = localStorage.getItem('user');
    if (auth){
      Navigate('/')
    }
  },[])
  
	


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.warn(formFields)
    let result = await fetch('http://localhost:5000/signup',{
      method:'post',
      body: JSON.stringify({firstName,lastName, email, phoneNumber, password, confirmPassword}),
      headers:{
        'Content-Type':'application/json'
      
      }
    });
    result = await result.json()
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result.result))
    localStorage.setItem("token",JSON.stringify(result.auth));
    Navigate("/")
  }
  const classes = useStyles();
  

  

  return (
    <div className="box" style={{ backgroundImage: `url(${background})` }}>
      <div className="box3">
        
        <div className="box4">
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
                      // console.log(values);
                    }}
                  >
                    <Form onSubmit={handleSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography>
                            <h2>Create Account</h2>
                            <span>For business, band or celebrity.</span>
                          </Typography>
                        </Grid>

                        <Grid item xs={6}>
                        <Textfield labelText="First name" type="text" name="firstName" value={firstName} onChange={handleChange} required />
                        </Grid>

                        <Grid item xs={6}>
                        <Textfield labelText="Last name" type="text" name="lastName" value={lastName} onChange={handleChange} required />
                        </Grid>

                        <Grid item xs={6}>
                        <Textfield labelText="Email" type="email" name="email" value={email} onChange={handleChange} required />
                        </Grid>

                        <Grid item xs={6}>
                        <Textfield labelText="Phone Number" type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange} minLength="10"
							maxLength="10" required />
                        </Grid>
                        <Grid item xs={6}>
                          <Textfield
                            name="password"
                            type="password"
                            labelText="Password"
                            value={password} 
                            onChange={handleChange}
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <Textfield
                            name="confirmPassword"
                            type="password"
                            labelText="Confirm Password"
                            value={confirmPassword} 
                            onChange={handleChange}
                          />
                        </Grid>


                        {/* <Grid item xs={12}>
                          <Checkbox
                            name="termsOfService"
                            onChange={buttonHandler}
                            label="I agree to all the Terms and Privacy policy "
                          />
                          
                        </Grid> */}
                        {/* <FormControlLabel control={<Checkbox color="success" />} label="Remember me" />
                        <FormControlLabel control={<Checkbox color="success" required />} label={`I agree to all the Terms and Privacy policy`} required />
                        <Grid item xs={12}>
                            
                            
                          <Button disabled={change} type="submit" variant="contained" color="primary">
                            Login
                          </Button>
                        </Grid> */}
                        <div className='signup-checkbox'>
						<FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
						<FormControlLabel control={<Checkbox color="primary" required />} label={`I agree to all the Terms and Privacy policy`} required />
					</div>
					
					
                      </Grid>
                      <Button className='signup-login-button' type='submit' variant="contained" size="lg">
						Login
					</Button>
                    <span className='already-login'>
						Already have an account?
						<Link to='/login'> Log In </Link>
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

export default SignUp;