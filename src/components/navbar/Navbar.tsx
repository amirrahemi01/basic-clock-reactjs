import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-gray-600 shadow-lg shadow-gray-500/50 fixed m-5 p-4 text-white bottom-0 rounded-2xl text-sm lg:text-xl sm:m-11">
        <Link className="p-1 transition duration-500 hover:text-slate-950" to="/">Clock</Link>
        <Link className="p-1 transition duration-500 hover:text-slate-950" to="/StopWatch">StopWatch</Link>
        <Link className="p-1 transition duration-500 hover:text-slate-950" to="/Worldclock">WorldClock</Link>
    </div>
  )
}

export default Navbar