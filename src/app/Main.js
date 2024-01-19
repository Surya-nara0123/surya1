'use client';
import React, { Component } from 'react';


export default function Main() {
  const divStyle = {
    topMargin : '0px',
    backgroundImage: `url("/backgroundImage.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    width: '100%',
    height: '500px', // You can adjust the height as needed
    // Add any additional styling as needed
  };
  return (
    <div className='min-h-1000' style={divStyle}>
    </div>
  );
}
// src\app\backgroundImage.png
// src\app\Main.js