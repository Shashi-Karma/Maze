import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../Axios/axios.api";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => { },
	isLoggedIn: false,
	setIsLoggedIn: () => { }
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const Navigate = useNavigate();
	const token = localStorage.getItem('token')

	useEffect(() => {
		const token = localStorage.getItem('token')
		const getUser = async () => {
			try {				
				const response = await getCurrentUser(token);
				if (response) {
					setCurrentUser(response);
				}
			} catch (error) {
				console.log(error)
			}
		}
		if(token) {
			getUser();
		}
	}, [token]);

	return (
		<UserContext.Provider value={{ currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}