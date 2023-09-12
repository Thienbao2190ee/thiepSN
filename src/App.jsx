import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Map from './page/map'

function App() {
  const [show, setShow] = useState(false)
  const nextPage = () => {
    setShow(true)
  }

  return (
    <>
      {show ? 
        <Map /> : 
        <Home nextPage={nextPage} /> }
        


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App