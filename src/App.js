import Navbar from './routes/Navbar'
import Home from './routes/Home'
import Project from './routes/Project'
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
    </div>
  );
}

export default App;
