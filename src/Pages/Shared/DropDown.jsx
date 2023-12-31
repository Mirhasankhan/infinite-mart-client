import { AiOutlineMenu } from 'react-icons/ai'
import avatar from '../../assets/avatar.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const MenuDropdown = () => {
    const { user, logOut, setRole } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <img className='h-8 rounded-full' src={avatar} alt="" />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>
                        {user ? (
                            <>
                                <Link
                                    to='/dashboard'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>

                                <div
                                    onClick={() => {
                                        setRole(null)
                                        logOut()
                                    }}
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                >
                                    Logout
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}          
        </div>
    )
}

export default MenuDropdown