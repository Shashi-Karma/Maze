import React, { Fragment, useState, useContext } from 'react'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import profilePic from '../Images/profile-pic.svg';
import   {ReactComponent as MazeLogo}  from '../Images/maze-icon1.svg';
import { ReactComponent as SearchIcon } from '../Images/search-icon.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';
import '../Component/Navigation.scss';

const Navigation = () => {
	const auth = localStorage.getItem('user');
	const Navigate = useNavigate();
	const HandleLogoutClick = () => {
		if (window.confirm("Are you sure to logout?")) {
			Navigate('/login');
			localStorage.clear();
			setIsLoggedIn(false);
		}
	}

	return (
		<>
			<div className='top-nav-bar'>
				<div className='logo-section'>
					<Link className='logo-container' to='/users/feeds'>
						<MazeLogo className='logo' />
						<span className='logo-text'> Maze</span>
					</Link>
				</div>
				<div className='search-box'>
					<SearchIcon className='search-icon' />
					<input type="text" className="search-input" placeholder='Search for something here' />
				</div>
				{/* <Link to='/users/profile'>
					<div className='user-info-dp'>
						<img src={profilePic} alt='user dp' />
					</div>
				</Link> */}
			</div>
			<div className='nav-left-container'>
            <NavLink to='/users/feeds' className={({ isActive }) => isActive ? `active` : undefined}>
					<div className='menu-item'>
						<GridViewIcon />
						<span>Feeds</span>
					</div>
                    </NavLink>
					<div className='menu-item'>
						<PersonIcon />
						<span>Profile</span>
					</div>
				
						{/* <div className='menu-item' style={{ height: '90px', paddingBottom: '25px' }} >
							<ManageAccountsIcon />
							<span>Manage Users</span>
						</div>
					
						<div className='menu-item'>
							<EventNoteIcon />
							<span>Reports</span>
						</div> */}
				<div className='menu-item' onClick={HandleLogoutClick}>
					<LogoutIcon />
					<span>Logout</span>
				</div>
			</div>
			<Outlet />

		</>
	)
}

export default Navigation;