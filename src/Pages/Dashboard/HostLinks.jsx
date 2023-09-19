import { NavLink } from "react-router-dom";

const HostLinks = () => {
    return (
        <div><NavLink
            to='/dashboard/add-product'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
            }
        >Add Product</NavLink>
            <NavLink
                to='/dashboard/my-listings'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >My Listings</NavLink>
        </div>
    );
};

export default HostLinks;