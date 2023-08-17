import React ,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Userdashboard = () => {
 const [userdata, setuserdata] = useState("")
 const {username} = useParams() 
 const Navigator = useNavigate()
 const gobackfunc = ()=>{
    Navigator('/login')
 }

 useEffect(()=>{
    fetch(`login/${username}/dashboard`)
    .then(response => response.json())
    .then(data => {setuserdata(data)})
    .catch((err)=>{
        console.log(err)
    })
 },[username])

  return (
    <>
    <button onClick={gobackfunc}>Back</button>
    <h1>Welcome , {username}</h1>
    <p>{userdata}</p>
    </>
  )
}

export default Userdashboard