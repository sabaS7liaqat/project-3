import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"
const links  =[
    {name:'Home', path:'/'},
    {name:'About', path:'/about'},
    {name:'Education', path:'/education'},
    {name:'Skills', path:'/skills'},
    {name:'Contact', path:'/contact'}
]
function NavbarII() {
  return (
   <nav className='flex px-24  gap-8 items-center bg-[rgb(8,28,41)] w-screen'>
    <h1 className='text-white '>SabaS7.</h1>
    <div className="h-12 flex gap-5  w-screen text-white justify-end items-center" >
    {links.map ((links, index) =>{
        return (
            <Link key={index} href={links.path} className=' ${link.path ===pathname &&  "text-blue-500 border-blue-900"} capitalize font-medium hover:text-blue-500 transition-all'>{links.name}
            </Link>
        )
    })}
</div>
   </nav>
  )
}

export default NavbarII
