import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaGoogle ,FaGithub} from "react-icons/fa";
import {  FaEye ,FaEyeSlash } from "react-icons/fa6";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const Register = () => {
  const[showPass,setShowPass] =useState(false);

  const[confirmPass,setConfirmPass] = useState(false);

  const handleRegisterForm = (e) => {
    e.preventDefault();
     const FullName = e.target.name.value;
     const email = e.target.email.value;
     const password = e.target.password.value;
     const consfirmPass = e.target.confirmpass.value;

     createUserWithEmailAndPassword(auth ,email,password) .then(result =>{
        const user = result.user;
        console.log(user);

     }) .catch((err)=>{
      console.log(err);
     })
  }

  return (
    <div className=' flex justify-center items-center h-[140vh] px-4 bg-green-950 pt-5'>
       <div className=' bg-white max-w-lg p-8'>

          <h2 className='text-green-800 font-bold text-center text-2xl mb-6  '>Register</h2>


         <form onSubmit={handleRegisterForm} className='space-y-4 pb-2  '> 
            <input type="text" placeholder=' Full Name' className='w-full border px-4 py-2  rounded focus:outline-none focus:ring-2 focus: ring-green-500' name="name" id="" required />

            <input type="email" placeholder=' Email' className='w-full border px-4 py-2  rounded focus:outline-none focus:ring-2 focus: ring-green-500' name="email" id="" required />

           {/* only password */}
    
          <div className=' relative flex items-center '>
                 <input type={showPass ? 'text' : 'password'} placeholder='Password' className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus: ring-green-500' name="password" id=""  required  />  

                  {
                    showPass ? <FaEyeSlash onClick={()=>setShowPass(!showPass)} className=' absolute  right-3 cursor-pointer'/> 
                    : <FaEye onClick={()=>setShowPass(!showPass)} className=' absolute right-3 cursor-pointer hover:text-green-600'/>
                  }
          </div>
      


           {/* confirm password  */}

           <div className=' relative flex items-center '>
               <input type={confirmPass ? 'text':'password' } placeholder='Confirm Password' className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus: ring-green-500'  name="confirmpass" id="" required /> <FaEye onClick={()=>setConfirmPass((!confirmPass))} className=' absolute  right-3' />

                {
                  confirmPass ? <FaEyeSlash onClick={()=>setConfirmPass(!confirmPass)} className='absolute  right-3 cursor-pointer'/> : < FaEye onClick={()=>setConfirmPass(!confirmPass)} className='absolute  right-3 cursor-pointer hover:text-green-600' />
                }

           </div>




           <div className='flex justify-between'>
            <p>
                <input type="checkbox" name="" id="checkbox" required />
                 <label htmlFor="checkbox"> Accept Terms & <Link className='text-green-500'> Condition </Link>  </label >
            </p>

            <p className='text-right hover:text-green-400 cursor-pointer'> Forgot Password </p>

           </div>

           <button type="submit" className='w-full text-white bg-green-700 py-2 rounded hover:text-green-800 cursor-pointer'>Register Now</button>

           </form>

           {/* Divider here */}
           <div className='flex items-center my-6'>
              <div className='flex-grow h-px bg-gray-700'></div>
              <span className=' mx-4 text-gray-500 text-sm'>OR</span>
              <div className='flex-grow h-px bg-gray-700'></div>
           </div>


           <div className='flex flex-col space-y-2 text-white'>

                <button className='bg-red-600 p-2 py-2 rounded hover:bg-red-700 cursor-pointer text-spa flex items-center justify-center'>Register with google <FaGoogle className='ml-2' /></button>

                 <button className=' bg-gray-600  p-2 py-2 rounded hover:bg-gray-400 cursor-pointer flex items-center justify-center'>Login with github <FaGithub className='ml-2' />  </button>

           </div>



           <div>
            <p className='text-black text-center mt-5'>
              Already Have an Account <Link to={'/login'}className='text-green-700 font-semibold hover:underline'>Login Here</Link>
            </p>
           </div>

        

      </div>
    </div>
  )
}

export default Register