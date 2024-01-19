import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Hello From Signup</h1>
      <br />
      <input className='p-2 rounded bg-gray-700 w-[350px]' id='useraname' type='usename' placeholder='Username'></input>
      <br />
      <input className='p-2 rounded bg-gray-700 w-[350px]' id='password' type='password' placeholder='Password'></input>
      <br />
      <input className='p-2 rounded bg-gray-700 w-[350px]' id='password confirm' type='password' placeholder='Confirm Password'></input>
      <br />
      <button className='p2 rounded bg-orange-600 w-[100px] h-[30px]'>Signup</button>
    </div>
  )
}
