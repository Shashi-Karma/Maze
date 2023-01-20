import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import { UserContext } from './user.context';

export const PostsContext = createContext({
	wholePostsData: [],
});

export const PostsProvider = ({ children }) => {
	const [wholePostsData, setWholePostsData] = useState([]);
	// const { isLoggedIn  } = useContext(UserContext);

	

	const value = { wholePostsData}
	return (
		<PostsContext.Provider value={value}>
			{children}
		</PostsContext.Provider>
	)
}