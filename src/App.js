import logo from './logo.svg';
import './App.css';


const throwKnownError=()=>{
  throw new Error("This is an error");
};
function App() {
  return (
    <div className="App">
     <button type="sumbit" color="primary" variant="contained" onClick={throwKnownError}>Send</button>
    </div>
  );
}

export default App;
