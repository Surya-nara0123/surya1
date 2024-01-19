import React from 'react'

export default function page({params}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <span className='p-2 rounded bg-blue-500'>{params.id}</span>
    </div>
  )
}
