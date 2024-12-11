import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
    const service = useLoaderData();
    const { title,price,img,_id} = service;
    const {user}=useContext(AuthContext)

    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const price=form.price.value;
        const date=form.date.value;
        const order={
            Customer_Name: name,
            email,
            price:price,
            service:title,
           service_id: _id,
            img,
            Date:date

        }
        console.log(order);
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res=>res.json())
        .catch(error=>{
            console.log(error);
        })

    }
    
    return (
        <div>
            <h2>Book service:{title}</h2>
            
            <div className="card bg-[#F3F3F3] w-full  shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body p-28">
                    <div className="flex flex-row justify-center gap-5 ">
                    <div className="form-control w-1/2">
                        
                        <input type="text" placeholder="Name" name="name" className="input input-bordered " required />
                    </div>
                    <div className="form-control w-1/2 ">
                        
                        <input type="text" defaultValue={ '$'+ price} name="price" className="input input-bordered " required />
                    </div>
                    </div>
                    <div className="flex flex-row justify-center  gap-5">
                    <div className="form-control w-1/2 ">
                        
                        <input type="date" name="date"  className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2 ">
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;