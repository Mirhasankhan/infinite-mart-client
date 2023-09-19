import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import useCurrentUser from "../../Hooks/useCurrentUser";
import HostLinks from "./HostLinks";
import UsersLinks from "./UsersLinks";

const Sidebar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const [users] = useCurrentUser()

    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <div className="bg-purple-400 w-1/6">
            <h1>{user?.email}</h1>
            {users[0]?.role == 'host' ? <HostLinks/> : <UsersLinks/>}
            <div>
                <NavLink
                    to='/dashboard/profile'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                        }`
                    }
                >
                    <FcSettings className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Profile</span>
                </NavLink>
                <button
                    onClick={handleLogOut}
                    className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                >
                    <GrLogout className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;