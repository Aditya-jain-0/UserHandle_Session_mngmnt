import React ,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const API_BASE = 'http://localhost:8000/login'

const Userdashboard = () => {
 const [userdata, setuserdata] = useState({})
 const {username} = useParams() 
 const Navigator = useNavigate()
 const gobackfunc = ()=>{
    Navigator('/login')
 }

 useEffect(()=>{
   fetch(`${API_BASE}/${username}/dashboard`)
   .then(response => response.json())
   .then(data => setuserdata(data))
   .catch(err=>console.log(err))
},[])


  return (
    <>
    <button onClick={gobackfunc}>Back</button>
    <h1>Welcome , {username}</h1>
    <ul>
      <li>{userdata.email}</li>
      <li>{userdata.jobprofile}</li>
    </ul>
    </>
  )
}

export default Userdashboard