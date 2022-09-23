import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import { getId } from "../Utils/Login.utils";

const UserList = () => {
  const [userAPI, setUserAPI] = useState({});
  const userId = getId()

  useEffect(() => {
    if(userId){
      axios
      .get(`https://ironrest.herokuapp.com/movieprojectusers/${userId}`)
      .then((response) => {
        setUserAPI(response.data);
        console.log(userAPI)
      })
      .catch((error) => window.alert("Error!"));
    }
    
  }, [userAPI, userId]);
  
  

  return (
    <div>
      <h2>My Favorites Movies</h2>
      {userAPI.movies &&
        userAPI.movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
    </div>
  );
};

export default UserList;
