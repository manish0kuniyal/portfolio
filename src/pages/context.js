import React, { createContext, useState } from 'react'

export const Appcontext=createContext(null)

export const ContextPage = (props) => {

 const[isDark,setDark]=useState(true)

function changeDark(){
    setDark(!isDark)
}

  return (
    <Appcontext.Provider
     value={{isDark,setDark,changeDark}}
    >

        {props.children}
    </Appcontext.Provider>
  )
}

export default ContextPage
