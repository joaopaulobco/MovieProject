import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-area">
      <h2>Creat an account</h2>
      <form className="form-register">
        <label>Name:</label>
        <input type="text" placeholder="First and last name" autoFocus required/>
        <label>Username:</label>
        <input type="text" placeholder="@username" required/>
        <button type="submit">Register</button>
      </form>
    </div>  
  );
};

export default RegisterPage;
