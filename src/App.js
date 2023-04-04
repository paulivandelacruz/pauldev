import Navbar from './routes/Navbar'
import Home from './routes/Home'
import Project from './routes/Project'
import About from './routes/About'
import Contact from './routes/Contact'
import Header from './routes/Header'
import TechStack from './routes/TechStack'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Home/>
      <About/>
      <TechStack/>
      <Project/>
      <Contact/>
      <div className='h-[150px]'></div>
    </div>
  );
}

export default App;
