import { useState } from "react";
import AddProductForm from "./AddProductForm";
import { addProduct } from "../../API/product";
import { imageUpload } from "../../API/imageUpload";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const AddProduct = () => {
    const {user} = useAuth()
    const [uploadImageName, setUploadImageName] = useState('Upload Image')
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = e.target.title.value
        const price = e.target.price.value
        const category = e.target.category.value
        const description = e.target.description.value
        const image = e.target.image.files[0]
        
        imageUpload(image)
            .then((data) => {
                const result = {email:user?.email, title, price, category, description, image: data.data.display_url }
                addProduct(result)
                    .then(data => {
                        console.log(data)
                        toast.success('Product Added!')
                        // navigate('/dashboard/my-listings')
                    })
                    .catch(err => console.log(err))

            })
            .catch(err =>{
                toast.error(err.message)
            })
            form.reset()

    }

    const handleImageChange = (image) => {
        setUploadImageName(image.name)
    }
    return (
        <div>
            <AddProductForm
                handleSubmit={handleSubmit}
                uploadImageName={uploadImageName}
                handleImageChange={handleImageChange}
            />
        </div>
    );
};

export default AddProduct;