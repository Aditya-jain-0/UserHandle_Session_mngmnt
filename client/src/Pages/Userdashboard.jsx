import React ,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
const PORT = process.env.REACT_APP_SERVER_PORT
const API_BASE = `https://user-handle-mern.vercel.app/`

const Userdashboard = () => {
 const [userdata, setuserdata] = useState({})
 const {username} = useParams() 
 const Navigator = useNavigate()
 const gobackfunc = ()=>{ 
    Navigator('/')
 }

useEffect(() => {
  const fetchdata = async () => {
    console.log("Fetching code ")
    try {
      const response = await fetch(`${API_BASE}/${username}`);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setuserdata(data);
      } else {
        toast.error(`${username} is not Authorized`);
        Navigator('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  fetchdata();
}, [username]);


  return (
    <>
    <button onClick={gobackfunc}>Back</button>
     <h1>{username}</h1>
    <ul>
      <li>{userdata.jobprofile}</li>
      <li>{userdata.fullname}</li>
      <li>{userdata.email}</li>
      <li>{userdata.phonenumber}</li> 
     </ul>
    </>
  )
}

export default Userdashboard