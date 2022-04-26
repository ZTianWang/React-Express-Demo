import './App.css';
import axios from 'axios'

function App() {

  // axios.defaults.baseURL = 'http://localhost:3001'

  const getReq = () => {
    axios.get('/g').then(res => console.log(res)).catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <button onClick={getReq}>send a getReq</button>
    </div>
  );
}

export default App;
