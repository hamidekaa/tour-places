import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Cards from "./components/Cards";
import data from './helper/data';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Header/>
  {data.map((item)=> <Cards {...item} />)}
 
    </div>
  );
}

export default App;
