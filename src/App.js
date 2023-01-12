
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Exercises from './pages/Exercises'
import Home from './pages/Home'

const App = () => {
    return (
        <>
            <Box width={"400px"} sx={{ width: { xl: '1488px' } }} m="auto">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<Exercises />} />
                </Routes>
                <Footer />
            </Box>
        </>
    )
}

export default App