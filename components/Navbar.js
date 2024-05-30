import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white flex flex-row justify-between px-4 h-16 items-center">
      <div className="logo font-bold text-lg">
        GetMeAChai
      </div>
      <ul className="flex flex-row justify-between gap-3">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar