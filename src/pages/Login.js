import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState();

  return (
    <div className='login'>
        <h2>Sign in to Movies&Series</h2>
        <form className='formulario'>
            <label>Username:</label>
            <input type="text" placeholder='@username' autoFocus required></input>
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