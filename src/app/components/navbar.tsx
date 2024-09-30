'use client'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-blue-600  text-white hover:text-gray-800 text-right justify-end gap-5 h-15 p-5 flex'>
        <div className='container mx-auto flex justify-between items-center'>
<a href=""className="text-4xl hover:text-purple-700 font-bold underline"> DSC</a>


    <Link href="/">Home</Link>
    
    <Link href="/blog">Blog</Link>
    <Link href="/finddentist">find dentist</Link>
    </div>
    
    </nav>
  )
}
