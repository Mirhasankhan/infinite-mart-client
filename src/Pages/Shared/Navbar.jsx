import Container from "../../Components/Container/Container";
import { BiSearch, BiCart } from 'react-icons/bi';

const Navbar = () => {
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
                    <BiCart className="text-5xl cursor-pointer" />
                    <button className="sign-up">Sign In</button>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;