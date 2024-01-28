'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function Page() {
  const router = useRouter();

  const handleLogin = () => {
    // Perform any login logic if needed
    // Navigate to the dashboard page
    router.push('/dashboard');
  };

  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  })

  const [ButtonDisabled, setButtonDisabled] = React.useState(false)
  const [loding, setLoding] = React.useState(false)

  const onSignup = async () => {
    try {
      setLoding(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("signup succefull", response.data)
      router.push("/login")
    } catch (error) {
      console.log("signUp failed")
    } finally {
      setLoding(false)
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Hello From Signup {loding? ": Proccessing": ""}</h1>
      <br />
      <input
        className='p-2 rounded bg-gray-700 w-[350px]'
        value={user.email}
        onChange={(e)=> setUser({...user, email:e.target.value})}
        id='email'
        type='text'
        placeholder='Email'></input>
      <br />
      <input
        className='p-2 rounded bg-gray-700 w-[350px]'
        value={user.username}
        onChange={(e)=> setUser({...user, username:e.target.value})}
        id='useraname'
        type='text'
        placeholder='Username'></input>
      <br />
      <input
        className='p-2 rounded bg-gray-700 w-[350px]'
        value={user.password}
        onChange={(e)=> setUser({...user, password:e.target.value})}
        id='password'
        type='password'
        placeholder='Password'></input>
      <br />  
      <button
        className='p2 rounded bg-orange-600 w-[100px] h-[30px]' onClick={onSignup}>
          {ButtonDisabled? "no signUp": "signUp"}</button>
      <br />
      Have an account?
      <Link href='/login' className='text-blue-500'>Login</Link>
    </div>
  )
}
