import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
const App = () => {
  return (
     <>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
        </BrowserRouter>
     </>
  )
}

export default App