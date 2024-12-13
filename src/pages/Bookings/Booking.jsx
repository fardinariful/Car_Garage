import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const [booking,setBooking]=useState([]);
    const {user}=useContext(AuthContext);
    const url=`http://localhost:5000/booking/?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])
    return (
        
        <div className="overflow-x-auto">
             <h1>Your Booking:{booking.length}</h1>
        <table className="table">
            {/* Table Header */}
            <thead>
                <tr>
                    
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Service</th>
                </tr>
            </thead>
            {/* Table Body */}
            <tbody>
                {booking.map((booking, index) => (
                    <BookingRow key={index} booking={booking} />
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