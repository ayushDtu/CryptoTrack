import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Foot from './components/Foot/Foot'

const App = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Foot/>
      
    </div>
  )
}

export default App

// CG-fhDyNt1AJ3DfAyWp2QapSmrp