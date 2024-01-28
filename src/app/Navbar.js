"use client";
import Link from "next/link";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get('/api/users/me');
        setIsLoggedIn(true);
        setUsername(response.data.data.username);
        setId(response.data.data._id);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.error);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0'>
      <div className='flex items-center justify-between h-[50px] min-w-screen p-4 mt-2'>
        <Link href="/" className='bg-red-500'>
          <h1>SwiftShip</h1>
        </Link>
        <div className="flex items-right">
            {isLoggedIn ? (
              <Link className='ml-auto items-center justify-center bg-gray-500 rounded p-2' href={`/dashboard/${id}`}>{username}</Link>
            ) : (
              <>
                <Link href='/signup' className='ml-auto items-center justify-center bg-gray-500 rounded p-2 pb-0'>Signup</Link>
                <Link href='/login' className='mt-0 ml-5 bg-black p-3 rounded-lg pb-2'>Login</Link>
              </>
            )}
          </div>

      </div>
    </div>
  );
}

/*
"use client";
import React from 'react';
import Link from "next/link";
import axios from 'axios';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Navbar() {

  
  export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
      // Check if user is logged in
      const checkLoggedIn = async () => {
        try {
          const response = await axios.get('/api/checkLoggedIn');
          setIsLoggedIn(response.data.isLoggedIn);
          setUsername(response.data.username);
        } catch (error) {
          console.error(error);
        }
      };

      checkLoggedIn();
    }, []);

    return (
      <div className='fixed top-0 left-0 right-0'>
        <div className='flex items-center justify-between h-[50px] min-w-screen p-4 mt-2'>
          <Link href="/" className='bg-red-500'>
            <h1>SwiftShip</h1>
          </Link>
          <div className="flex items-right">
            {isLoggedIn ? (
              <button className='ml-auto items-center justify-center bg-gray-500 rounded p-2 pb-0'>{username}</button>
            ) : (
              <>
                <Link href='/signup' className='ml-auto items-center justify-center bg-gray-500 rounded p-2 pb-0'>Signup</Link>
                <Link href='/login' className='mt-0 ml-5 bg-black p-3 rounded-lg pb-2'>Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
*/