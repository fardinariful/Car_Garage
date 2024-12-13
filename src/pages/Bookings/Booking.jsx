import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Booking = () => {
    const [booking,setBooking]=useState([]);
    const {user}=useContext(AuthContext);
    const url=`http://localhost:5000/booking/?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        const remaining=booking.filter(booking => booking._id !== id);
                        setBooking(remaining);
                        
                    })
            }
        });

    }

    const handleConfirm=id=>{
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining=booking.filter(booking => booking._id !== id);
                const updated=booking.find(booking => booking._id !== id);
                updated.status='confirm';
                const newBookings=[updated,...remaining];
                setBooking(newBookings);

            }
        })
    }




    return (
        
        <div className="overflow-x-auto">
             <h1>Your Booking:{booking.length}</h1>
        <table className="table">
            {/* Table Header */}
            <thead>
                <tr>
                    <th> </th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Status</th>
                </tr>
            </thead>
            {/* Table Body */}
            <tbody>
                {booking.map((booking, index) => (
                    <BookingRow key={index} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}/>
                ))}
            </tbody>
        </table>
    </div>
        // <div>
        //     <h1>Your Booking:{booking.length}</h1>
        //     {
        //         booking.map(booking=> <BookingRow key={booking._id} booking={booking}></BookingRow>)
        //     }
        // </div>
    );
};

export default Booking;