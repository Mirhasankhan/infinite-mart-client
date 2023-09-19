import { useEffect, useState } from "react";
import { getProduct } from "../../API/product";
import useAuth from "../../Hooks/useAuth";

const MyListings = () => {
    const [listings, setListings] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
       getProduct(user?.email).then(data => setListings(data))
    },[user])
    return (
        <div>
            {listings.length}
        </div>
    );
};

export default MyListings;