import  { useContext, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';





export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const[activeLink,setActiveLink] =useState('/');
    const location = useLocation();
    const{user,handleSignout }= useContext(AuthContext);
   

    useEffect(() => {
        setActiveLink(location.pathname || '/');
    },[location.pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    const handleLinkClick = (path) => {
        setActiveLink(path);

    }

    const handleSignoutUser = () => {
        handleSignout()
    };

    return (
        <nav className='bg-black/60 text-white py-4 md:py-8 fixed w-full '>
            <div className=' container mx-auto flex justify-between items-center'>
                <h3 className='text-3xl font-bold'> Simle React </h3>

                {/* mobile menu button */}
                <div className='md:hidden ml-auto'>
                    <button onClick={toggleMenu}>
                        {
                            isOpen ? <IoMdClose /> : <FaBars />
                        }


                    </button>
                </div>
                <ul className='hidden md:flex space-x-4 md:space-x-6 '>

                    <li>
                        <Link to={'/'} onClick={() => handleLinkClick('/')} className={`${activeLink === '/' ? 'text-red-600' :'hover:text-green-300'}`} > Home </Link>
                    </li>

                    <li>
                        <Link to={'/products'} onClick={()=>handleLinkClick('/products')} className={`${activeLink === '/products' ? 'text-red-600' : 'hover:text-green-300'}`} >Products</Link>
                    </li>

                    <li>
                        <Link to={'/blogs'} onClick={()=>handleLinkClick('/blogs')}     className={`${activeLink === '/blogs' ? 'text-red-700' : 'hover:text-green-300'}`}>Blogs</Link>
                    </li>

                    <li>
                        <Link to={'/contact'} onClick={()=>handleLinkClick('/contact')} className={`${activeLink === '/contact' ? 'text-blue-500' : 'hover:text-green-300'}`}>Contact</Link>
                    </li>

                    <li>
                        <Link to={'/about'} onClick={()=>handleLinkClick('/about')} className={`${activeLink === '/about' ? 'text-yellow-300' : 'hover:text-green-300'}`}>About</Link>
                    </li>
                
                </ul>

                <div >
                {
                    user ?  <div className='flex items-center'>
                                <span>{user.email}</span> <button onClick={handleSignout} className='hidden md:block bg-white text-black px-4  py-1 rounded cursor-pointer hover:bg-slate-400'>Signout</button> 
                            </div> 
                            :
                            <div>
                               <span> {user?.email} </span>
                               <Link to={'/login'}>
                               <button className='hidden md:block bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-400'> Login </button>
                              </Link>
                           </div>
                
                }
                </div>

                

                {/* Mobile menu collaapsed */}
                <div className={`md:hidden w-full absolute bg-green-950 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col  items-center py-6 space-y-2'>
                        <li className='hover:text-green-500'>Home</li>
                        <li className='hover:text-green-500'>Products</li>
                        <li className='hover:text-green-500'>Blogs</li>
                        <li className='hover:text-green-500'>Contact</li>
                        <li className='hover:text-green-500'>About</li>
                        <li>
                            <button className='bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-400'> Login </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar