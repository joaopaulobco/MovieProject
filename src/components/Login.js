import './Login.css'

const Login = () => {
   
  return (
    <div className='login'>
        <form className='formulario'>
            <label>Username:</label>
            <input type="text" placeholder='@username'></input>
            <button type='submit'>Submit</button>
        </form>
        <div className='register'>
            <p>Don't you have a username?</p>
            <button type='submit'>Click here to register</button>
        </div>
    </div>
  )
}

export default Login