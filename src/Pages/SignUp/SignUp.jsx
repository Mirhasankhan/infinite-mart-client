import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// import SocialLogin from '../../Components/SocialLogin';
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";
import { useState } from "react";
import { saveUser } from "../../API/auth";

// const token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const SignUp = () => {
    // const image_hosting_URL = `https://api.imgbb.com/1/upload?key=${token}`
    const { createUser, updateUserProfile } = useAuth()
    const [seller, setSeller] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleSeller = (e) => {
        const value = e.target.checked;
        setSeller(value)
    }

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const pass = (watch("password"));
        const confirmPass = (watch("RetypePassword"))
        if (pass !== confirmPass) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password did not match, type again!!',
            })
            return;
        }
        else {
            createUser(data.email, data.password)
                .then(() => {
                    updateUserProfile(data.name, data.photo)
                        .then(() => {
                            saveUser(data)
                            toast.success('LoggedIn successfully', {
                                position: 'top-right',
                                style: { backgroundColor: 'blue', color: 'white' }
                            })
                            navigate(from, { replace: true })
                            reset()
                        })
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: 'top-right',
                        style: { backgroundColor: 'black', color: 'white' }
                    })
                })
        }
    };

    return (
        <div className='py-10'>
            <div className='md:w-2/5 w-2/3 mx-auto bg-white rounded-lg p-3 border-2'>
                <h1 className='font-semibold text-2xl text-center'>Create your Tune<span className='text-sky-400'>Tutor</span> Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Type Your Name" className="input-style" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Type Your Email" className="input-style" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Password</span>
                        </label>
                        <input {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} type="password" placeholder="Type Your Password" className="input-style" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Confirm Password</span>
                        </label>
                        <input {...register("RetypePassword", { required: true })} type="password" placeholder="ReType Your Password" className="input-style" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">PhotoURL</span>
                        </label>
                        <input {...register("photo", { required: true })} type="url" placeholder="upload photo url" className="input-style" />
                        {errors.photo && <span className="text-red-600">Photo is required</span>}

                    </div>
                    <div className="flex items-center gap-3">
                        <input onChange={handleSeller} type="checkbox" name="" id="" />
                        <p className="text-red-500 font-semibold text-xl">Sign Up As Seller</p>
                    </div>
                    <div className="form-control mt-6">
                        <input className="sign-up" type="submit" value="Sign Up" />
                    </div>

                </form>

                <h1 className="pl-6">Already have an account? <Link className='text-blue-600' to="/login">Login</Link></h1>
                <div className="divider">Or</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;