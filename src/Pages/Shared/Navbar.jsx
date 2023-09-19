import { Link } from "react-router-dom";
import { BiSearch, BiCart } from 'react-icons/bi';
import { becomeBuyer, becomeHost } from "../../API/auth";
import Container from "../../Components/Container/Container";
import useAuth from "../../Hooks/useAuth";
import MenuDropdown from "./DropDown";

const Navbar = () => {
    const { user, role, setRole } = useAuth()
    const handleHost = () => {
        becomeHost(user?.email)
        setRole('host')
    }
    const handleBuyer = () => {
        becomeBuyer(user?.email)
        setRole('buyer')
    }
    return (
        <Container>
            <div className="flex py-4 gap-4 md:gap-24">
                <div>
                    <h1 className="text-xl md:text-3xl font-semibold">Infinite Mart</h1>
                </div>
                <div className="flex-grow">
                    <div className="flex items-stretch">
                        <input className="border-2 outline-blue-500 border-b-orange-500 rounded-l-md py-2 w-full " type="text" />
                        <button className="bg-blue-400 pt-2 py-3 px-4 rounded-r-md text-white"><BiSearch className="text-xl font-semibold" /></button>
                    </div>
                </div>
                <div className="flex gap-1 md:gap-4 items-center justify-center">
                    {
                        role == 'host' && <button onClick={handleBuyer} className="text-green-400 text-xl font-semibold">Switch To Buying</button>
                    }
                    {
                        role == 'buyer' && <button onClick={handleHost} className="text-green-400 text-xl font-semibold">Switch To Selling</button>
                    }
                    <MenuDropdown></MenuDropdown>
                    {/* {user?.email && <Link to="/dashboard">Dashboard</Link>}
                    <BiCart className="text-5xl cursor-pointer" />
                    <Link to="/signUp"><button className="sign-up">Sign In</button></Link> */}
                </div>
            </div>
        </Container>
    );
};

export default Navbar;