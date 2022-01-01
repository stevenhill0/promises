import './App.css';
import swapi from '../src/apis/starwars';
import { getData, sendData } from '../src/apis/jsonplaceholder';

swapi(3);
getData();
sendData();

function App() {
  return <div>hello</div>;
}

export default App;
