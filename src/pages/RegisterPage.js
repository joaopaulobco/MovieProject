import "./RegisterPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import usersApi from "../api/usersapi"

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [usersList, setUsersList] = useState([]);

    const navigate = useNavigate(); 

    useEffect(() => {
      usersApi.getUsersList()
      .then((response) => {
        setUsersList(response.data)
      })
      .catch((error) => window.alert('Error!'))
    }, []); 

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            name: name,
            username: user,
            movies: []
        }

        axios
            .post('https://ironrest.herokuapp.com/movieprojectusers', body)
            .then(() => {
                setName('');
                setUser('');

                navigate('/login')
            })
            .catch((error) => window.alert('Error!'))

        const equalUser = usersList.find((eachuser) => eachuser.username === user)
        
        equalUser && window.alert("User already register. Try another username.")
    };

  return (
      <div className="register-area">
      <h2>Creat an account</h2>
      <form className="form-register" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
            type="text"
            placeholder="First and last name"
            autoFocus
            required  
            onChange={(event) => setName(event.target.value)}
            value={name}
        />
        <label>Username:</label>
        <input 
            type="text" 
            placeholder="@username" 
            required
            onChange={(event) => setUser(event.target.value)}
            value={user}     
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
