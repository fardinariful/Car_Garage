import img1 from '../../../assets/assets/icons/group.svg'
import img2 from '../../../assets/assets/icons/check.svg'
import img3 from '../../../assets/assets/icons/deliveryt.svg'
import img4 from '../../../assets/assets/icons/person.svg'
import img5 from '../../../assets/assets/icons/quote.svg'
import img6 from '../../../assets/assets/icons/Wrench.svg'


const CoreFeatures = () => {
    return (
        <div className='space-y-4'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h2 className="text-[#FF3811] font-bold">Core Features</h2>
                <h1 className="text-5xl font-bold">What Customer Says</h1>
                <p className='text-center'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-row justify-around'>
                <div className='border border-[#E8E8E8] flex flex-col justify-center items-center p-8 rounded-lg'>
                    <img src={img1} alt="" />
                    <p className='text-[#444444] font-bold'>Expert Team</p>
                </div>
                <div className='border border-[#E8E8E8] flex flex-col justify-center items-center p-8 rounded-lg'>
                    <img src={img3} alt="" />
                    <p className='text-[#444444] font-bold'>Timely Delivery</p>
                </div>
                <div className='border border-[#E8E8E8] flex flex-col justify-center items-center p-8 rounded-lg'>
                    <img src={img4} alt="" />
                    <p className='text-[#444444] font-bold'>24/7 Support</p>
                </div>
                <div className='border border-[#E8E8E8] flex flex-col justify-center items-center p-8 rounded-lg'>
                    <img src={img6} alt="" />
                    <p className='text-[#444444] font-bold'>Best Equipment</p>
                </div>
                <div className='border border-[#E8E8E8] flex flex-col justify-center items-center p-8 rounded-lg'>
                    <img src={img2} alt="" />
                    <p className='text-[#444444] font-bold'>100% Guaranty</p>
                </div>
                <div className='border border-[#E8E8E8] flex flex-col justify-center items-center p-8 rounded-lg'>
                    <img src={img3} alt="" />
                    <p className='text-[#444444] font-bold'>Timely Delivery</p>
                </div>
            </div>

        </div>

    );
};

export default CoreFeatures;