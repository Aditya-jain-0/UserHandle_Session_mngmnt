import React , {useState} from 'react'
const API_BASE = 'http://localhost:8000/login'

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

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
    }else{
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