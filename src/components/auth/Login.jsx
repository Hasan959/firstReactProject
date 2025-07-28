import React from 'react'
import { Link } from 'react-router'
import { FaGoogle ,FaGithub} from "react-icons/fa";

const Login = () => {
  return (
    <div className=' flex justify-center items-center h-[100vh] px-4 bg-green-950 pt-5'>
       <div className='bg-white max-w-lg p-8'>

          <h2 className='text-green-800 font-bold text-center text-2xl mb-6  '>Login</h2>



        <form className='space-y-4 pb-2 '> 

            <input type="email" placeholder=' Email' className='w-full border px-4 py-2  rounded focus:outline-none focus:ring-2 focus: ring-green-500' name="" id="" />

            <input type="password" placeholder='Password' className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus: ring-green-500'  name="" id="" />

            <div className='flex justify-between'>
                <p>
                   <input type="checkbox" name="" id="checkbox" />
                   <label htmlFor="checkbox"> Accept Terms & <Link className='text-green-500'>Condition </Link> </label>
                </p>

                <p className='text-right hover:text-green-400 cursor-pointer'>
                    Forgot Password
                </p>
            </div>

                 <button type="submit" className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer text-white'>Login</button>

        </form>

           {/* Divider here */}
           <div className='flex items-center my-6'>
                <div className='flex-grow h-px bg-gray-700'></div>
                <span className=' mx-4 text-gray-500 text-sm'>OR</span>
                <div className='flex-grow h-px bg-gray-700'></div>
           </div>


           <div className='flex flex-col space-y-2 text-white '>

                <button className='bg-red-600 p-2 py-2 rounded hover:bg-red-700 cursor-pointer  flex items-center justify-center'>Login with google <FaGoogle className='ml-2' /> </button>

                <button className=' bg-gray-600  p-2 py-2 rounded hover:bg-gray-400 cursor-pointer  flex items-center justify-center'>Login with github <FaGithub className='ml-2' /> </button>

           </div>

           <div>
              <p className='text-black text-center mt-5'>
                 Don't Have an Account? <Link to={'/register'} className='text-green-700 font-semibold hover:underline'>Register Here</Link>
              </p>
           </div>

        

      </div>
    </div>
  )
}

export default Login