import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="space-y-4">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#FF3811] font-extrabold">Service</h1>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="text-[#737373] text-center">The majority have suffered alteration in some form, by injected humour, or Randomized <br /> words which don't look even slightly believable. </p>


            </div>
            <div className="grid grid-rows-1 gap-4 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
                }

            </div>
            <div className="flex justify-center items-center ">
                <button className="btn bg-[#FF3811] text-white btn-outline ">More Service</button>
            </div>

        </div>
    );
};

export default Services;