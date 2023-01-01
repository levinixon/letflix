import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 420) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);

  return (
    <div className={`w-full bg-transparent h-24 fixed z-10 p-5 ${show && "nav__change"}
    transition ease-in duration-300`}>
    <div className='flex justify-between'>
        <h1 className=' font-bold cursor-pointer text-6xl text-red-700 left-0 ml-5 fixed object-contain'>
            LETFLIX
        </h1>
        <img className='w-14 h-14 cursor-pointer right-0 mr-5 fixed'
        src="https://avatars.dicebear.com/api/male/john.svg"
        alt=''
        onClick={() => auth.signOut()}
        />
    </div>
    </div>
  )
}

export default Nav