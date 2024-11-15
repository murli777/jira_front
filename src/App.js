import './App.css';
import Login from './Components/Login Form/Login';
import Modal from './Components/Modal/Modal';


function App() {
  return (
    <div className="App-main">
      <Modal children={<Login/>}/>
      <Login/>
    </div>
  );
}

export default App;
