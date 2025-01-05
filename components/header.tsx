import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-blue-50 shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={'/logo.png'} alt='logo' width={60} height={60}></Image>
      <span className="ml-3 text-3xl font-bold font-dancing text-cyan-700">Wellness Warriors</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center font-dancing">
      <Link href={'./'} className="mr-16 hover:text-gray-900">Home</Link>
      <Link href={'/blogs'} className="mr-16 hover:text-gray-900">Blogs</Link>
      <Link href={'/about'} className="mr-16 hover:text-gray-900">About</Link>
    </nav>
  </div>
</header>
  )
}

export default Header

