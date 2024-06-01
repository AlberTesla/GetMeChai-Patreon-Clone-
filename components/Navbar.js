// "use Client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white flex flex-row justify-between px-4 h-16 items-center">
      <div className="logo font-bold text-lg flex flex-row justify-center items-center gap-3">
        <div className="text-white">GetMeAChai</div>
        <iframe src="https://giphy.com/embed/YOaLwgaAjmU4Ve5psK" width={30} height={30} className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div>
        <Link href={"/login"}>
          <button type="button" className="btn">
            Home
          </button>
        </Link>
        {/* <button type="button" className="btn">
          About
        </button>
        <button type="button" className="btn">
          Projects
        </button>
        <button type="button" className="btn">
          Signup
        </button>
        <button type="button" className="btn">
          Login
        </button> */}
      </div>
      {/* <ul className="flex flex-row justify-between gap-3">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
        <li>Login</li>
      </ul> */}
    </nav>
  )
}

export default Navbar
