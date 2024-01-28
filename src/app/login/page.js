"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from "react-hot-toast";
import axios from 'axios';

export default function Page() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push(`/dashboard`);
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Hello From Signup</h1>
      <br />
      <input
        className='p-2 rounded bg-gray-700 w-[350px]'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        id='username'
        type='text'
        placeholder='Username' />
      <br />
      <input
        className='p-2 rounded bg-gray-700 w-[350px]'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        id='password'
        type='password'
        placeholder='Password' />
      <br />
      <button
        className='p-auto rounded bg-orange-600 w-[100px] h-[30px]'
        onClick={handleLogin}>
        Login
      </button>
      <br />
      No account yet?
      <Link href='/signup' className='text-blue-500'>register</Link>
    </div>
  );
}
