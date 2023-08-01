import React from 'react'

function Header({category,title}) {
  return (
   <div className='mb-10'>
    <p className='text-gray-700'>{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-700">{title}</p>
   </div>
  )
}

export default Header