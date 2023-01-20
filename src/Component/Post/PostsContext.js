import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const PostsContext = createContext({
	wholePostsData: [],
});

export const PostsProvider = ({ children }) => {
	const [wholePostsData, setWholePostsData] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('token')
		const getAllPost = async () => {			
			const config = {
				headers: {
					Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			}
			try {
				const response = await axios.get('http://localhost:5000/posts', config);
				setWholePostsData(response.data);				
			} catch (error) {
				console.error(error);
			}
		}
		if(token) {
			getAllPost();
		}
	}, );

	const value = { wholePostsData}
	return (
		<PostsContext.Provider value={value}>
			{children}
		</PostsContext.Provider>
	)
}