import React, { useRef } from 'react'
import { auth } from '../firebase';

function SignInScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        });
    };

    const signIn = (e) => {
        e.preventDefault();
    
        auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          )
          .then((authUser) => {
            console.log(authUser);
          })
          .catch((error) => alert(error.message));
      };

  return (
    <div className='max-w-xs p-8 m-auto bg-black rounded-md'>
        <form className='grid flex-col'>
            <h1 className='font-bold mb-5 text-left text-xl'>Sign In Bitches</h1>
            <input className='h-8 mb-4 bg-white pt-5 pb-5 pl-4 pr-4 text-black rounded-md' 
            type="Email" 
            placeholder='Email'
            ref={emailRef}/>
            <input className='h-8 mb-4 bg-white pt-5 pb-5 pl-4 pr-4 text-black rounded-md' 
            type="Password" 
            placeholder='Password'
            ref={passwordRef}/>
            <button className='pt-1 pb-1 pl-4 pr-4 bg-red-600 text-white rounded-md mt-4 font-semibold hover:text-black' 
            type='Submit'
            onClick={signIn}>
                Let's Go!
            </button>
            <h4 className='text-left mt-6'>
                <span className='text-gray-400 pr-1'>
                New to Letflix? 
                </span>
                <span className='cursor-pointer hover:underline'
                onClick={register}>
                Sign Up.
                </span>
            </h4>
        </form>
    </div>
  )
}

export default SignInScreen