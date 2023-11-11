import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Login from './components/pages/login/Login'
function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
