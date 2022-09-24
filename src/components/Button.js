import React, { useContext } from 'react'
import { countContext } from '../Context'

const Button = () => {
  const { setCount } = useContext(countContext) 
  return (
    <div>
        <button onClick={()=>setCount((count)=>count+1)}>Increment </button>
       
    </div>
  )
}

export default Button