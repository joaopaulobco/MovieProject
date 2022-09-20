import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [usersAPI, setUsersAPI] = useState([]); 
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  useEffect(() => {
    axios
    .get('https://ironrest.herokuapp.com/movieprojectusers')
    .then((response) => {
      setUsersAPI(response.data)
    })
    .catch((error) => window.alert('Error!'))
  }, []); 
  console.log(usersAPI)

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  
  const findUser = () => {
    usersAPI.find((user) => user.username ? navigate('/profile') : window.alert("User not found"))
  };

  console.log(username)

  return (
    <div className='login'>
        <h2>Sign in to Movies&Series</h2>
        <form className='formulario' onSubmit={handleSubmit}>
            <label>Username:</label>
            <input 
              type="text" 
              placeholder='@username' 
              autoFocus 
              required 
              onChange={(event) => setUsername(event.target.value)}  
              value={username}
              />
            <button type='submit' onClick={findUser}>Submit</button>
        </form>
        <div className='register'>
            <p>Don't you have a username?</p>
            <Link to="/register" >
              <button type='submit'>Click here to register</button>
            </Link>
        </div>
    </div>
  )
};

export default Login;