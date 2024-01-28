"use client";
import React from 'react'
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';


export default function page({params}) {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error) {
      console.log("Logout failed", error.message);
      toast.error(error.message);

    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      Welcome to the dashboard
      <span className='p-2 rounded bg-blue-500'>{params.id}</span>
      <button
        className='p-2 rounded bg-red-500 mt-5'
        onClick={logout}>
        Logout
      </button>
    </div>
  )
}
