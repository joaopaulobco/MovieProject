import "./RegisterPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate(); 

    // useEffect(() => {
    //   axios
    //   .get('https://ironrest.herokuapp.com/movieprojectusers')
    //   .then((response) => {
    //     setUsers(response.data)
    //   })
    //   .catch((error) => window.alert('Error!'))
    // }, []); 
    
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

        //const notRegister = users.find((user) => user.username === name)
        // console.log("findUser",findUser)

        // notRegister ? window.alert("User already registered. Try another username.") :  ;
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
