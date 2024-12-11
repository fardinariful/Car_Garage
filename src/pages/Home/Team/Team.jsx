import img1 from '../../../assets/assets/images/team/T1.jpg'
import img2 from '../../../assets/assets/images/team/T2.jpg'
import img3 from '../../../assets/assets/images/team/T3.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Team = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#FF3811] font-bold">Team</h2>
                <h2 className="text-[#151515] font-bold text-5xl">Meet Our Team</h2>
                <p className="text-[#737373] text-center">The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-row justify-between gap-10'>
                <div className="card bg-[#FFF] w-96 shadow-xl space-y-3 p-10 ml-5">
                    <figure className="px-10 pt-10">
                        <img
                            src={img1}
                            alt="Shoes"
                            className="rounded-xl h-52" />
                    </figure>
                    <div className="card-bod px-10">
                        <h2 className="card-title text-[#444444] font-bold text-2xl">Car Engine Plug</h2>
                        <div className="card-actions flex flex-col items-center text-center space-y-2">
                            <p className="text-[#FF3811] font-semibold text-xl text-center">Engine Expert</p>
                            <div className='flex flex-row justify-around gap-3'>
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaLinkedin></FaLinkedin>

                            </div>


                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFF] w-96 shadow-xl space-y-3 p-10 ml-5">
                    <figure className="px-10 pt-10">
                        <img
                            src={img2}
                            alt="Shoes"
                            className="rounded-xl h-52" />
                    </figure>
                    <div className="card-bod px-10 items-center text-center">
                        <h2 className="card-title text-[#444444] font-bold text-2xl flex ">Car Engine Plug</h2>
                        <div className="card-actions  space-y-2">
                            <p className="text-[#FF3811] font-semibold text-xl">Engine Expert</p>
                            <div className='flex flex-row justify-around gap-3'>
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaLinkedin></FaLinkedin>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFF] w-96 shadow-xl space-y-3 p-10 ml-5">
                    <figure className="px-10 pt-10">
                        <img
                            src={img3}
                            alt="Shoes"
                            className="rounded-xl h-52" />
                    </figure>
                    <div className="card-bod px-10">
                        <h2 className="card-title text-[#444444] font-bold text-2xl">Car Engine Plug</h2>
                        <div className="card-actions items-center flex justify-center space-y-2">
                            <p className="text-[#FF3811] font-semibold text-xl">Engine Expert</p>
                            <div className='flex flex-row justify-around gap-3'>
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaLinkedin></FaLinkedin>

                            </div>
                        </div>
                    </div>
                </div>

                
            </div>


        </div>
    );
};

export default Team;