import {useState} from 'react'
import toast from 'react-hot-toast'

const PORT = process.env.REACT_APP_SERVER_PORT
// const API_BASE = `http://localhost:${PORT}/register`
// const API_BASE = `https://user-handle-mern.vercel.app/register`
function Register() {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [fullname, setfullname] = useState("")
  const [phonenumber, setphonenumber] = useState("")
  const [password, setpassword] = useState("")
  const [jobprofile, setjobprofile] = useState("")

  const handleSubmit = async()=>{    
    try{    
     const resp = await fetch(API_BASE,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
          username: username, 
          email: email,      
          fullname:fullname,
          phonenumber:phonenumber,
          password: password,
          jobprofile: jobprofile
      })
    })
    if(resp.status === 200){
      toast.success(`${username} registered successfully`)
    }else{
      toast.error('error while registering')
    }
  }catch(err){
    console.log(err)
  }
  }
  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
          Enter Username :- <input
            type='text'
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />  
          <br/>
          Enter Email :- <input
            type='email'
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          <br/>
          Enter Fullname : <input
            type='text'
            value={fullname}
            onChange={(e)=>setfullname(e.target.value)}  
         />
          <br/>
          Enter Phone number : <input
              type='text'
              value={phonenumber}
              onChange={(e)=>setphonenumber(e.target.value)}
          />        
          <br/>
          Enter Password :- <input
            type='password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <br/>
          Enter Job Profile :- <input
              type='text'
              value={jobprofile}
              onChange={(e)=>setjobprofile(e.target.value)}
          />
          <br/>
          <button>Register Me</button>
      </form>  
      <p>Back to <a href='/'>Login</a></p>  
    </>
  );
}

export default Register;
