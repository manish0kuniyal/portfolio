import React, { useContext, useState } from 'react';
import { Appcontext } from './context';
import ModeNightSharpIcon from '@mui/icons-material/ModeNightSharp';
import Typewriter from "typewriter-effect";
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';
import Socials from './socials';
import Message from './message';
import ThreeScene from './anime';
import "./animation.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button } from '@mui/material';

const Home = () => {
  const { isDark, setDark, changeDark } = useContext(Appcontext);
  const navigate = useNavigate();
  const [content, setContent] = useState("intro");

  const handleNavigate = (page) => {
    setContent(page);
    navigate(page);
  };

  return (
    <div className={`bg-${isDark ? '[#282A2D]' : '[#F5f5f5]'}  rounded-[10px] h-[97vh] mb-16 overflow-hidden  main-box `}>
  
      <button  
        className='pl-[90%] pt-[3vmin]  dark-light '
        onClick={changeDark}
      >
       
        <ModeNightSharpIcon
          className={`text-${isDark ? "[#67aeca]" : "[#282A2D]"}`}
        />
      </button>
  
    <div className=' mx-2 h-[7%] text-[8vmin] mt-1 p-2 '>
       <Navbar/>
    </div>
      

    <div className={`home-box border-2 rounded-[12px]  mx-4 h-[80%] text-[8vmin] mt-6 ${isDark ? 'text-[#DADCE0]' : 'text-[#282A2D]'}  flex flex-col justify-around  overflow-hidden `}>

    <div className='sphere'
    style={{ width: '100%', height: '4%' ,marginTop:"-60px",marginLeft:"10vmin"}}> 
        <ThreeScene />
      </div>
<div className='intro-2-h px-6   '>
          {content === "intro" ? (
            <div className='mt-4 '>
              <div 
                className='text-bx flex  flex-wrap text-[7vmin]  mb-10  mr-[40%] mt-[8vmin]'>
                <span className='mr-[6px] '>Hello! I'm </span> <p className='text-[#67aeca]' style={{ whiteSpace: 'nowrap' }}> Manish Kuniyal</p><p className='ml-[6px] '> weaving tech and creativity to craft digital stories. </p></div>
              <div className='text-[5vmin]'>
                <Typewriter 
                  options={{
                    strings: ["-Web Dev", "-Dev Ops", "-Open Source", "-Machine Learning"],
                    autoStart: true,
                    loop: true, 
                    deleteSpeed: 20, 
                  }}
                />
              </div>
            </div>
          ) : content === "socials" ? (
            <Socials />
          ) : content === "message" ? (
            <Message />
          ) : null}
        </div>
        <div className=' flex   mx-4  text-[30%]'>
          <button className='text-[#67aeca] font-bold px-2 py-1 ' onClick={() => handleNavigate('intro')}>Home</button>
          <button className='text-[#67aeca] font-bold  px-2 py-1 ml-1'  onClick={() => handleNavigate('socials')}>Socials</button>
          <button className='text-[#67aeca] font-bold px-2 py-1 border-1 ml-1' onClick={() => handleNavigate('message')}>Text me <ArrowOutwardIcon style={{fontSize:"80%"}}/> </button>
        </div>
      </div>
  
    </div>
  );
};

export default Home;
