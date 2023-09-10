
const SingleProduct = ({product}) => {
    const {location,image, price} = product
    return (
        <div className="p-2 hover:border-2 relative group">
            <img className="h-64 w-full rounded-md" src={image} alt="" />
            <h1>{location}</h1>
            <h1>{price}</h1>
            <button className="sign-up w-full">View Details</button>
            <button className="group-hover:block btn btn-warning absolute top-32 hidden right-32">Add To Cart</button>
        </div>
    );
};

export default SingleProduct;