import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [userAPI, setUserAPI] = useState({});
    const { _id } = useParams(); 

    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/movieprojectusers/${_id}`)
        .then((response) => {
          setUserAPI(response.data)
        })
        .catch((error) => window.alert('Error!'))
      }, []); 

      console.log(userAPI)

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