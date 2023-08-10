import React from 'react'
import "./animation.css"
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[95vh] rounded-[10px] npm  bg-[#282A2D]">
      <p className="animate-pulse"><HourglassEmptyIcon className='text-[#67aeca]' style={{fontSize:"5rem"}} />
      </p> 
    </div>
  )
}

export default Loading
