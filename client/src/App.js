import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Userdashboard from './Pages/Userdashboard'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
     <>
        <div>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/:username' element={<Userdashboard/>}></Route>
          </Routes>
        </BrowserRouter>
     </>
  )
}


export default App