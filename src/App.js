import './App.css';
import 'tachyons';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Avatar from './component/Avatar';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Avatar/>
      <About/>
      <Contact/>
    </>
  );
}

export default App;
