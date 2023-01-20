import Post from './Post';
// import './all-posts.styles.scss';
import Acomment from './AComment'

const Allpost = ({ post, comments }) => {
	const lastComment = comments;
	
	return (
		<>
			<div className='post-container'>
				<Post post={post} />
				{/* <Acomment comments={lastComment} /> */}
				{/* {					
					typeof( lastComment) !== "undefined" ? (<Acomment comment={lastComment} />) : <></>
				} */}
					
			</div>
		</>
	)
}

export default Allpost;