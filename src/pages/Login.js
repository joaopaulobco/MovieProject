import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import usersApi from '../api/usersapi';

const Login = () => {
  const [username, setUsername] = useState("");
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

    const findUser = usersList.find((user) => user.username === username)

    findUser ? navigate(`/userprofile/${findUser._id}`) : window.alert("User not found");   
  };
  
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
            <button type='submit'>Submit</button>
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