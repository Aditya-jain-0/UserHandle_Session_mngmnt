import {useState,useEffect} from 'react'
const API_BASE = 'http://localhost:8000';
function Register() {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [jobprofile, setjobprofile] = useState("")

  const handleSubmit = ()=>{    
    fetch(API_BASE,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
          username: username, 
          email: email,      
          password: password,
          jobprofile: jobprofile
      })
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
          Enter Email :- <input
            type='email'
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
<p style={{ color: 'red' }}>*make sure email must be valid , We'll be sending a Conformation mail</p>
          Enter Password :- <input
            type='password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <br/>
          Enter Username :- <input
            type='text'
            value={username}
            onChange={(e)=>setusername(e.target.value)}
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
    </>
  );
}

export default Register;
