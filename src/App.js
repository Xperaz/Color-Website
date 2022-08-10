import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import NavBar from './compenents/NavBar';
// import * as ReactDOM from 'react-dom';

const ThemeButtons = ( {setTheme} ) => {
  return (
    <div className='absolute flex right-8 top-4'>
      <ThemeCircle setTheme={setTheme} value="" bg="bg-red-500"/>
      <ThemeCircle setTheme={setTheme} value="dark" bg="bg-slate-700"/>
      <ThemeCircle setTheme={setTheme} value="purple" bg="bg-purple-500"/>
    </div>
  );
};

const ThemeCircle = (props) => {
  return (
    <div className={'h-8 w-8 mr-4 last:mr-0 rounded-full bg-red-500 cursor-pointer ' + props.bg} 
    onClick ={() => props.setTheme(props.value)} >
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState("");

  return (
    <div className={
      theme === "dark"
      ? "dark-theme"
      : theme === "purple"
      ? "purple-theme" : ""
      }>
    <div className='font-nunito text-skin-base bg-gradient-to-r from-skin-hue
    h-screen w-screen selection:bg-red-500 selection:text-white'>
      <BrowserRouter>
        <NavBar/>
        <ThemeButtons setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
