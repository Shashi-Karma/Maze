import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useContext } from 'react';
import { ReactComponent as ThreeDots } from  '../../Images/three-dots.svg';
import { ReactComponent as SingleDot } from '../../Images/single-dot.svg';
import { ReactComponent as LikeIcon } from '../../Images/Like-icon.svg';
import   {ReactComponent as MazeLogo}  from '../../Images/maze-icon1.svg';
import { ReactComponent as CommentIcon } from '../../Images/comments.svg';
import { ReactComponent as ArrowIcon } from '../../Images/Arrow.svg';
import { ReactComponent as DeleteIcon } from '../../Images/delete-icon.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ActionDropdownPost from './ActiondropdownPost';
import '../Post/Post.scss';
import { UserContext } from '../Post/user.context';
import moment from 'moment';
import { useEffect } from 'react';

const DefaultnewCommentData = {
	body: "",
	post_id: "",
	user_id: ""
}

const Post = ({ postId }) => {
    const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [like, setLike] = useState(0);
    const [count ,setCount] = useState(0);

    const [newCommentData, setNewCommentData] = useState(DefaultnewCommentData);
    const toggleActionDropdown = () => setIsActionDropdownOpen(!isActionDropdownOpen);

    const onCommentInputChangeHandler = (event) => {
		const bodyValue = event.target.value;
		const idValue = post.id;

		setNewCommentData({ body: `${bodyValue}`, post_id: `${idValue}` });
	}


	const addCommentHandler = async () => {
		if (newCommentData == DefaultnewCommentData) {
			alert("please enter something in comment!");
		} else {
			try {

				const response = await axios.post('http://localhost:5000/comments/', newCommentData);
                console.log(response);
				alert("New comment added successfully!");
				window.location.reload();
			} catch (error) {
				console.error(error);
			}
		}
	}

    const[post, setPost] = useState([]);
    
    useEffect(()=>{
        getpost();

    },[])
    
    
    const getpost = async ()=>{
        let result = await fetch('http://localhost:5000/posts');
        result = await result.json();
        setPost(result);
        
    }
    console.warn("post",post);
	// const deleteHandler = async (id) => {
	// 	let result = await fetch(`http://localhost:5000/posts/${id}`,{
	// 		method:"Delete"
	// 	});
	// 	result = await result.json()
	// 		if(result)
	// 		{
	// 			getpost();
	// 		}
    //     }
        const likeHandler = async(id) => {
            try {
                const userId= JSON.parse(localStorage.getItem('user'))._id;
				const config = {
					headers: {
						authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
                const response = await axios.put(`http://localhost:5000/posts/like`, config); 
                
            } catch (err) {}
            setLike(isLiked ? like - 1 : like + 1);
            setIsLiked(!isLiked);
          };
        const OnLikeClick = async () => {
            setIsLiked(true)
            setCount(count+1);
            // const accessToken = localStorage.getItem("access_token");
            // try {
            //     const response = LikePost(post.id, accessToken);
            // } catch (error) {
            //     console.log(error)
            // }
        }
    
        const OnUnlikeClick = async () => {
            setIsLiked(false)
            setCount(count-1);
            // console.log(post.id)
            // const accessToken = localStorage.getItem("access_token");
            // try {
            //     const response = UnlikePost(post.id, accessToken);
            // } catch (error) {
            //     console.log(error)
            // }
        }

	return (
		<>
        <div>
            
        {post.slice(0).reverse().map((item,index)=>(
            
            <>
			<div className='post-title-container'>
                <div>
            <MazeLogo className='logo2' />
            
				 <div className="post-title">Title {index+1}</div></div>
                 <span className='post-info'>{moment(item.updated_at).fromNow()}, {post.post_status}</span>
                 <div>
				<div className='post-threedots' type='button' onClick={toggleActionDropdown} >
					<ThreeDots />
                   
				</div></div>
			</div>
			 {isActionDropdownOpen && <ActionDropdownPost postId={item._id} />}
            
			<div className='description'>{item.description}</div>
       
			<div className='likes-comments-count'>
            <span> {like}Like</span>
				<span><SingleDot /></span>
				<span> Comments</span>
			</div>
			<hr className='line1' />
			<div className='add-like-comment-container'>
				
					
            {
					isLiked ? (
						<div className={`add `} onClick={likeHandler}>
							<FavoriteIcon sx={{ color: 'red' }} />
							<span> Unlike</span>
						</div>
					) : (
						<div className={`add `} onClick={likeHandler}>
							<LikeIcon />
							<span>Like</span>
						</div>
					)
				}
				
				<Link to='/users/comments' state={{ postId: post._id }}>
					<div className='add'>
						<CommentIcon />
						<span>Comments</span>
					</div>
				</Link>
			</div>
			<hr className='line2' />
			<div className='add-a-comment'>
            <input type='text' placeholder='Write a comment' onChange={onCommentInputChangeHandler} />
				<div className='add-comment-button' onClick={addCommentHandler}>
					<ArrowIcon className='arrow-icon' />
				</div>
                
			</div>
            </>
            
            ))}
        </div>
		</>

        )
}

export default Post;