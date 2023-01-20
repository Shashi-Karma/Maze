import { useState, useContext } from 'react';
import axios from "axios";
import { ReactComponent as LiveVideoIcon } from '../../Images/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../Images/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../Images/feeling-icon.svg';
import   {ReactComponent as MazeLogo}  from '../../Images/maze-icon1.svg';
import {PostsContext} from '../../Component/Post/PostsContext'
import {UserContext} from '../../Component/Post/user.context'
import AllPost from '../../Component/Post/Allpost'
import '../../Routes/Feed/Feeds.scss';
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ListUser from '../../Component/ListUser'

const DefaultpostData = {
	
	title: "",
	description: "",
	post_status: ""
}
const Feeds = ({ post }) => {

	const { wholePostsData} = useContext(PostsContext);
	const { setCurrentUser } = useContext(UserContext);
	const [postData, setPostData] = useState(DefaultpostData);
	const { description, post_status } = postData;
    
	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setPostData({
			...postData,
			[name]: value,
			title: `${setCurrentUser.firstName} ${setCurrentUser.lastName}`,
			user_id: setCurrentUser.id
		});
	}

	const onClickPostButton = async () => {
		if (postData == DefaultpostData) {
			alert("please enter something in post!");
		}
		
		// else {
		// 	console.log(postData)
		// 	const access_token = localStorage.getItem('access_token')
		// 	const config = {
		// 		headers: {
		// 			Authorization: `Bearer ${access_token}`,
		// 		},
		// 	}
			else {
				const userId= JSON.parse(localStorage.getItem('user'))._id;
				// const response = await axios.post('http://localhost:5000/addpost', postData ,config);
				let result = await fetch('http://localhost:5000/addpost',{
				method:'post',
				body: JSON.stringify({description }),
				headers:{
					'Content-Type':'application/json',
					authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
				
				}
				});
				alert("New post created successfully!");
				window.location.reload();
				// window.location.reload();
			// } catch (error) {
			// 	console.error(error);
			// }
			result = await result.json();
		console.warn(result)
		}
		
	}


	return (
		<>  <ListUser/>
			<div className='home-container'>
				<div className='add-post-container'>
					<form><MazeLogo className='logo1' />
						<input  type='text' name='description' value={description} placeholder="What's happening ?" onChange={onChangeHandler} />
						<div className='addons-with-post'>
							<div className='add-post-item'>
								<LiveVideoIcon /><span> Live Video</span>
							</div>
							<div className='add-post-item'>
								<PhotosVideosIcon /> <span> Photo/Video</span>
							</div>
							<div className='add-post-item'>
								<FeelingIcon /> <span> Feeling </span>
							</div>
							<div className='status'>
							<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
								<InputLabel id="demo-select-small">Status</InputLabel>
								<Select labelId="demo-select-small"
									id="demo-select-small"
									name='post_status'
									value={post_status}
									label="post_status"
									onChange={onChangeHandler} >
									<MenuItem value={'public'}>public</MenuItem>
									<MenuItem value={'private'}>private</MenuItem>
								</Select>
							</FormControl>
							</div>
							
						</div>
						<div className='btn'>
						<Button  className='add-post-button' onClick={onClickPostButton} variant="contained">Post</Button>
						</div>
					</form>
				</div>
				<div className='post-container1'>
				<AllPost   />
				</div>
				
				{/* {
					wholePostsData && wholePostsData.slice(0).reverse().map((post) => {
						// return  <AllPost/>
						
						
					})
				} */}
			</div>
		</>
	)
}

export default Feeds;