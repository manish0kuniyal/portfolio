import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContextPage from "./pages/context";
import Home from './pages/home';
import Message from './pages/message';
import Socials from './pages/socials';
import ThreeScene from './pages/anime';
import Navbar from './pages/navbar';
import Loading from './pages/loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Router>
        <div className='p-3 bg-[#eeeeee] h-[100vh] overflow-hidden '>
          {loading ? (
            <Loading />
          ) : (
            <ContextPage>
              <Home />
              
              <Routes>
                <Route path='/socials' element={<Socials/>} />
                <Route path='/message' element={<Message/>} />
              </Routes>
            </ContextPage>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
