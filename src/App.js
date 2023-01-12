
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
    return (
        <>
            <Box width={"400px"}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<Home />} />
                </Routes>
            </Box>
        </>
    )
}

export default App