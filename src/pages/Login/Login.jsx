import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/assets/images/login/login.svg'
import { FaFacebook, FaGoogle,  FaLinkedin } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {

    const {login}=useContext(AuthContext);
    const navigate=useNavigate();


    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const allinfo={email,password}
        console.log('Here is the info:',allinfo);
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={img1} alt="" />
                </div>
                <div className="card w-1/2 border border-[#D0D0D0]  shrink-0 ">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h2 className='text-center text-[#444444] font-semibold text-5xl'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#444444] font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#444444] font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-[#444444] font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn bg-[#FF3811] text-white">Signin</button>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-[#444444] font-medium'>Or Sign In with</p>
                            <div className='flex flex-row gap-3'>
                              <span className='text-[#3B5998]'><FaFacebook></FaFacebook></span>  
                              <span className='text-[#0A66C2]'><FaLinkedin></FaLinkedin></span>  
                                <FaGoogle></FaGoogle>
                            </div>
                            <p>Don't have an account? <Link className='text-red-600 font-semibold' to='/signup'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;