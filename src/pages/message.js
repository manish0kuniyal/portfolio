import React ,{useContext, useRef}from 'react'
import emailjs from '@emailjs/browser'
import { Appcontext } from './context'

const Message = () => {
  const form =useRef()
  const { isDark, setDark, changeDark } = useContext(Appcontext);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mw6xpfi', 'template_l9ktv4i', form.current, 'r7LYLWZcfAtQyvruO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("message sent")
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}
      className={`text-[3vmin] flex flex-col text-${isDark ? '[#67aeca]' : '[#282A2D]'} `}>
        <input className='w-[50vmin] text-[2vmin] mb-2 bg-[transparent] border-2 border-[#67aeca] rounded-[5px] p-2' name='user_name'  type="text" placeholder='Your Name' required />
        <input  className='w-[50vmin] rounded-[5px] p-2 text-[2vmin] mb-2 bg-[transparent] border-2 border-[#67aeca]' name='user_email'    type="email" placeholder='Email' required />
        <input className='w-[50vmin] rounded-[5px] p-2 pb-[20vmin] text-[2vmin] mb-2 bg-[transparent] border-2  border-[#67aeca]'  type="text" name='message' placeholder='Message . . .' required />
        <button className='w-[20vmin] rounded-[5px] p-2 text-[2vmin] mb-2  font-bold text-white bg-[#67aeca]'  type='submit' >Send</button>
      </form>
    </div>
  )
}

export default Message
