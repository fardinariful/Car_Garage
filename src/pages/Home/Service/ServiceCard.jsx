import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
    const { title, price,img } = service;
    return (
        <div className="card bg-[#FFF] w-96 shadow-xl space-y-3 p-10 ml-5">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl h-52" />
            </figure>
            <div className="card-bod px-10">
                <h2 className="card-title text-[#444444] font-bold text-2xl">{title}</h2>
                <div className="card-actions items-center flex justify-between space-y-2">
                <p className="text-[#FF3811] font-semibold text-xl">Price: ${price}</p>
                    <button className="text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;