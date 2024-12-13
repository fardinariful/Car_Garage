

const BookingRow = ({ booking,handleDelete,handleConfirm }) => {
    const {status, Customer_Name, price, service, img, Date, _id } = booking;

  
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Customer_Name}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <td>{Date}</td>
            <th>
                <p >{service}</p>
            </th>
            <th>
                {
                    status==='confirm' ? <span className="font-bold text-green-600">Confirmed</span> :<button onClick={()=>handleConfirm(_id)}> Please Confirm</button>
                }
                </th>
        </tr>
    );
};

export default BookingRow;
