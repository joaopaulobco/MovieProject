import './App.css';
import menuImg from './justify.svg'
import profileImg from './person-circle.svg'

function App() {
  return (
    <div className="App">
      <nav>
        <div className='menu-sidebar'><img src={menuImg} alt='menu-sidebar' /></div>
        <div className='title'><h1>MovieFlix</h1></div>
        <div className='profile-img'><img src={profileImg} alt='profile'/></div>
        <div className='login'><h2>Login</h2></div>
      </nav>
        <h4>Últimos lançamentos</h4>
        <hr></hr>
        <p>lista de filmes - GET API</p>
    </div>
  );
}

export default App;
