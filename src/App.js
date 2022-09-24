import React, { useState } from 'react'
import DisplayCount from './components/DisplayCount'
import { countContext } from './Context'

const App = () => {
    const [count, setCount] = useState(0)
  return (
   <div>
    <countContext.Provider value={{count, setCount}}>
    <DisplayCount />
    </countContext.Provider>

   </div>
  )
}

export default App