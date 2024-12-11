import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Booking = () => {
    const [booking,setBooking]=useState([]);
    const {user}=useContext(AuthContext);
    const url=`http://localhost:5000/booking/?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Booking;