import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ReactComponent as DeleteIcon } from '../../Images/delete-icon.svg';
// import { ReactComponent as EditIcon } from '../../edit-post.svg';
import './ActiondropdownPost.scss';
import { useEffect } from 'react';
const ActionDropdownPost = ({ postId }) => {
	// const[post, setPost] = useState([]);
    
    // useEffect(()=>{
    //     getpost();

    // },[])

	// const getpost = async ()=>{
    //     let result = await fetch('http://localhost:5000/posts');
    //     result = await result.json();
	// 	setPost(result);
	
    

	const deleteHandler = async () => {
		// let result = await fetch(`http://localhost:5000/posts/${postId}`,{
		// 	method:"Delete"
		// });
		// result = await result.json()
		// setPost(result)
		// if(result)
		// 	{
		// 		getpost();
		// 	}
			
		
		if (window.confirm("Do you want to delete this post?")) {
			try {
				const userId= JSON.parse(localStorage.getItem('user'))._id;
				const config = {
					headers: {
						authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
				const response = await axios.delete(`http://localhost:5000/posts/${postId}`, config);
				console.log(response);
				alert("Post deleted successfully!");
				window.location.reload();
			} catch (error) {
				console.error(error);
				alert(`Error occured ${error}`);
			}
		}
	}

	return (
		<>
		
		
           
		<div className='action-dropdown-container'>
			<button>
			<div className='delete-action' type='button'  onClick={deleteHandler}>
				<DeleteIcon />
				<span>Delete</span>
				
			</div>
			</button>
		</div>
			
		
			
		</>
	)
}

export default ActionDropdownPost;