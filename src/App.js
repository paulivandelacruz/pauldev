import Navbar from './routes/Navbar'
import Home from './routes/Home'
import Project from './routes/Project'
import About from './routes/About'
import Contact from './routes/Contact'
import Header from './routes/Header'
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Home/>
      <Project/>
      <About/>
      <Contact/>
    <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
