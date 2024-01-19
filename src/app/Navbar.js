"use client";
import React from 'react';
import Link from "next/link";

export default function Navbar() {
  return (
    <div className='flex items-center justify-between h-[50px] min-w-screen p-4 mt-2'>
      <Link href="/">
        <h1>Hello</h1>
      </Link>
      <div className="flex items-right">
        <Link href='/signup' className='ml-auto items-center justify-center bg-gray-500 rounded p-2 pb-0'>Signup</Link>
        <Link href='/login' className='mt-0 ml-5 bg-black p-3 rounded-lg pb-2'>Login</Link>

      </div>
    </div>
  );
}
