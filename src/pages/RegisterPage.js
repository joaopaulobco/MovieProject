import "./RegisterPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            name: name,
            username: user,
        }

        axios
            .post('https://ironrest.herokuapp.com/movieprojectusers', body)
            .then(() => {
                setName('');
                setUser('');

                navigate('/login')
            })
            .catch((error) => window.alert('Error!'))
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
