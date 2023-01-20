import { useState } from 'react';
import moment from 'moment';
import { useEffect } from "react";

import { ReactComponent as CommentLike } from '../../Images/Like-icon.svg';
import { ReactComponent as ThreeDots } from '../../Images/three-dots.svg';
import   {ReactComponent as MazeLogo}  from '../../Images/maze-icon1.svg';
// import ActionDropdownComment from '../action-dropdown-comment/action-dropdown-comment.component';

import './AComment.scss';


const Acomment = ({ id }) => {
	// const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);
	// const toggleActionDropdown = () => setIsActionDropdownOpen(!isActionDropdownOpen);

	
    const[	comment, setComment] = useState([]);
    useEffect(()=>{
       
getcomment();
    },[])
    
    
    
    const getcomment = async ()=>{
        let result = await fetch('http://localhost:5000/comments');
        result = await result.json();
        setComment(result);
        
    }

	return (
	<>
		{comment.map((item,index) => {
			return(
		<div className='a-comment-container'>
			<hr className='comment-line' />
			<div className='comment-body-container'>
				{/* <span className='comment-user'>
					{comment.commented_by.first_name} {comment.commented_by.last_name}
				</span> */}
				{/* <div className='comment-threedots' onClick={toggleActionDropdown} >
					<ThreeDots />
				</div> */}
				{/* {isActionDropdownOpen && <ActionDropdownComment comment={comment} />} */}
			</div>
			<span className='comment-body'>
			<div>
            <MazeLogo className='logo4' />
            
				 <div className="comment-title">User {index+1}</div></div>

				
			</span>
			<div className='comment'>{item.body}</div>
			
			<div className='comment-info'>
				<CommentLike />
				<span className='comment-like-count'>2</span>
			</div>
			<span className='comment-time'>{moment(item.updated_at).fromNow()}</span>
		</div>
			);
		})}
		</>
	)
}

export default Acomment;