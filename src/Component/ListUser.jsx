import axios from "axios";
import { useEffect } from "react";
import {useState} from 'react'
import   {ReactComponent as MazeLogo}  from '../Images/maze-icon1.svg';
import { ReactComponent as ThreeDots } from  '../Images/three-dots.svg';
import '../Component/ListUser.scss'
// const UserListItem = ({user}) => {
// 	return (
// 			<div className='user-list-item'>
// 				<MazeLogo className='user-list-dp' />
// 				<span>{user.first_name} {user.last_name}</span>
// 			</div>
// 	)
// }

function ListUser(){
    const[admins, setAdmins] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/admin/admins')
        .then(res=>{
            console.warn(res.data)
            setAdmins(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div className='user-list'>
        <div className='user-list-header'>
            <h2>Users List</h2>
            <ThreeDots />
        </div>
        {
            admins.length> 0 &&
            admins.map((adminItem, Index) =>{
               return(
                <>
                <div className='user-list-item'>
				<MazeLogo className='user-list-dp' />
				<span>{adminItem.firstName} {adminItem.lastName}</span>
			</div>
                
                </>
               )
            })
        }
      </div>
    )
}
export default ListUser;