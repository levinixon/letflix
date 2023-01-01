import React, { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import SignInScreen from './SignInScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);


  return (
    <div>
        <div className='w-full h-screen bg-letflix bg-center bg-no-repeat bg-cover opacity-80'>
                <h1 className='fixed font-bold cursor-pointer text-6xl text-red-600 object-contain p-5 z-10'>
                    LETFLIX
                </h1>
                <button onClick={() => setSignIn(true)}  
                className='fixed right-5 pl-4 pr-4 pt-3 pb-3 cursor-pointer mt-7 bg-red-600 rounded-md hover:text-black font-semibold'>
                Sign In
                </button>
             <div className='z-10 p-5 absolute top-1/3 ml-auto mr-auto left-0 right-0 text-center'>
            {signIn ? (
            <SignInScreen />
             ) : (
            
            <div className='z-10 p-5 absolute top-1/3 ml-auto mr-auto left-0 right-0 text-center'>
            <h1 className='mb-5 text-6xl'>
                Let's watch some films
            </h1>
            <div className='m-4'>
                <form className=''>
                    <input className='p-3 h-12 w-auto border-none max-w-xl bg-white text-black' type='email' placeholder='Email Address'/>
                    <button onClick={() => setSignIn(true)} 
                    className='pt-3 pb-3 pl-4 pr-4 text-md bg-red-600 font-semibold cursor-pointer hover:text-black'>GET STARTED</button>
                </form>
            </div>
            
            </div>
             )}
            </div>
            </div>
            </div>
         );
             }
             
export default LoginScreen;