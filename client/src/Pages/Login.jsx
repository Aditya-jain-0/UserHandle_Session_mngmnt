import React , {useState , useEffect} from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
const PORT = process.env.REACT_APP_SERVER_PORT
// const API_BASE = `http://localhost:${PORT}`
// const API_BASE = 'https://user-handle-mern.vercel.app/'


const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("") 
  const Navigator = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(username,password)
    try{
    const response =  await fetch(API_BASE,{
      method:'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body:JSON.stringify({
        username:username,
        password : password
      })
    })
    if(response.status === 200){
      console.log('Login successfull')
      toast.success(`${username} logged successfully`)
      Navigator(`/${username}`)
    }else{
      toast.error('Login Failed Kindly Check for valid credantials')
      console.log("login failed")
    }
  }catch(err){console.log(err)}
}

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    Enter Username :- <input 
        type='text'
        value={username}
        onChange={(e)=>setusername(e.target.value)}
      />
      <br/>
     Enter Password :- <input
        type='password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />
      <br/>
      <button>Login</button>
    </form>
    <p>New here , go for <a href='register'>Register</a></p>
    </>
  )
}

export default Login