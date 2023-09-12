import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './page/home'
import Map from './page/map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          {/* <Home /> */}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/map' element={<Map/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
