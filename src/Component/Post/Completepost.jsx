import { useLocation } from 'react-router-dom';
import Post from './Post';
import './Completepost.scss';
import Acomment from './AComment';
import { useContext } from 'react';
import { PostsContext } from './PostsContext';
import { useState } from "react";
import { useEffect } from "react";


const CompletePost = () => {
	const location = useLocation();
	const { postId } = location.state;

    const[post, setPost] = useState([]);
    const[comment, setComment] = useState([]);
    useEffect(()=>{
        getpost();
getcomment();
    },[])
    
    
    const getpost = async ()=>{
        let result = await fetch('http://localhost:5000/posts');
        result = await result.json();
        setPost(result);
        
    }
    const getcomment = async ()=>{
        let result = await fetch('http://localhost:5000/comments');
        result = await result.json();
        setComment(result);
        
    }

	

	return (
		<>
			<div className='all-comments-container'>
				<div className='whole-post-container'>
				{post.map((item) => {
					if (post._id === postId) {
						return (
							<>
								<Post key={item.id}  />
								<h2>Comments</h2>
								{post.map((comment) => {
									return <Acomment key={comment.id} comment={comment} />
								})}
							</>
						);
					}
				})}
				</div>
			</div>
		</>
	)
}

export default CompletePost;