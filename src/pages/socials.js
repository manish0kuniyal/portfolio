import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HexagonIcon from '@mui/icons-material/Hexagon';
import CloseIcon from '@mui/icons-material/Close';

const Socials = () => {
  return (
    <div className='text-white h-[80%] text-[8vmin]  pl-8 flex flex-col justify-evenly'>
      <a href="https://github.com/manish0kuniyal">
        <GitHubIcon className='text-[#67aeca] '
        style={{fontSize:"2rem"}} />
      </a>
      <a href="https://www.linkedin.com/in/manish-kuniyal-b0329024b">
        <LinkedInIcon className='text-[#67aeca]' style={{fontSize:"2rem"}} />
      </a>
      <a href="https://devpost.com/manishkuniyal08?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
        <HexagonIcon className='text-[#67aeca]'  style={{fontSize:"2rem"}}/>
      </a>
      <a href="https://twitter.com/manishkuniyal?s=09">
        <CloseIcon className='text-[#67aeca]' style={{fontSize:"2rem"}} />
      </a>
    </div>
  );
}

export default Socials;
