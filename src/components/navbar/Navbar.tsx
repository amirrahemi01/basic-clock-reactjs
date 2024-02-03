import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-gray-600 shadow-lg shadow-gray-500/50 fixed m-11 p-4 text-white bottom-0 rounded-2xl">
        <Link className="p-1 transition hover:text-sky-400" to="/">Clock</Link>
        <Link className="p-1" to="/StopWatch">StopWatch</Link>
        <Link className="p-1" to="/Worldclock">WorldClock</Link>
    </div>
  )
}

export default Navbar