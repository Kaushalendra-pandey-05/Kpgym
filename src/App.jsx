import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './component/Navbar'
import Footer from './component/Fotter'
function App() {
  return ( 
    // here xl is used for responsivenss for larger device
    
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/exercise/:id" element={<ExerciseDetail/>}/>

        </Routes>
 

 <Footer/>
    </Box>
  )
}

export default App


