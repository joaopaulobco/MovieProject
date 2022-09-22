import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import './UserList.css';
import UserListContext from '../Utils/UserListContext';


const UserList = () => {
    const [userAPI, setUserAPI] = useState({});
    const { _id } = useParams(); 
    const {userList} = useContext(UserListContext);

    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/movieprojectusers/${_id}`)
        .then((response) => {
          setUserAPI(response.data)
        })
        .catch((error) => window.alert('Error!'))
      }, [_id]); 
      useEffect(() => {
        console.log(userList)
      },[userList])

  return (
    <div>
        <h2>My Favorites Movies</h2>
        {userAPI.movies && userAPI.movies.map((user) => {
            return <li key={user._id}>{user.movies}</li>
        })}
    </div>
  )
}

export default UserList; 