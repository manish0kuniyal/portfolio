import React ,{useContext} from 'react'
import{ Appcontext} from './context';
import "./animation.css"
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

export const Navbar = () => {

    const { isDark,setDark, changeDark } = useContext(Appcontext);
    
  return (
    <div className='flex items-center justify-between'>
        <Link to='/'>
        <div className='font-bold text-[40%] text-white '>
          <h2 className={`title-name flex  text-${isDark ? "[#DADCE0]" : "[#282A2D]"}`}> <p className='text-[#67aeca]'>{`<`}</p>Manish<p className='text-[#67aeca]'>{`/>`}</p></h2> 
        </div>
        </Link>

        {/* <Link to="/socials">
        <EmailOutlinedIcon/>
        </Link>

        <Link to="/message">
        <EmailOutlinedIcon/> */}
        {/* </Link> */}
    </div>
  )
}

export default Navbar
