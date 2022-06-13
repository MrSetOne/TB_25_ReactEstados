import './App.css';
import Contador from './components/Contador/Contador';



function App() {
  return (
    <div className="App">
      <Contador step={5} initialValue={15}/>
    </div>
  );
}

export default App;
