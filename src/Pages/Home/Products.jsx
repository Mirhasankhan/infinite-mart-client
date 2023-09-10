import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Container from "../../Components/Container/Container";

const Products = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('categoryData.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(p => p.category == category)
                    setProducts(filtered)
                }
                else {
                    setProducts(data)
                }

            })
    }, [category])
    return (
        <div className="bg-gray-100">
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    {
                        products.map((product, index) => <SingleProduct key={index} product={product}></SingleProduct>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Products;