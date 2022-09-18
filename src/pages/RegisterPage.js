import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-area">
      <h2>Creat an account</h2>
      <form className="form-register">
        <label>Name:</label>
        <input type="text" placeholder="First and last name" />
        <label>Username:</label>
        <input type="text" placeholder="@username" />
      </form>
      <button type="submit">Register</button>
    </div>  
  );
};

export default RegisterPage;
