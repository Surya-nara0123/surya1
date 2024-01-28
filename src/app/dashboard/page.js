"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { toast } from "react-hot-toast";

export default function page() {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
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

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);

  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      Welcome to the dashboard
      <hr />
      <h1 className='p-2 rounded bg-purple-500'>{data === "nothing"? "nothing": <Link href={`/dashboard/${data}`}>{data}</Link>}</h1>
      <hr />
      <hr />
      <hr />
      <hr />
      <button
        className='p-2 rounded bg-red-500'
        onClick={logout}>
        Logout
      </button>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
        <button
            className='p-2 rounded bg-red-500'
            onClick={getUserDetails}>
            Get User Details
        </button>
      <hr />
    </div>
  )
}
