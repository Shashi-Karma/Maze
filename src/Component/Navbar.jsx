import   {ReactComponent as MazeIcon}  from '../Images/maze-icon.svg';
import { Link, Outlet } from 'react-router-dom';
import '../Component/Navbar.scss'

const Navbar = () => {
	return(
		<div className='front-page-container'>
			<Link to='/'>
				<div className='front-page-title'>
                    <div className='mazeicon'>
					<MazeIcon/> </div>
					<span className='maze'>Maze</span>				
				</div>
			</Link>			
			<hr />
			<Outlet />
		</div>
	)
}


export default Navbar;