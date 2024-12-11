import A1 from '../../../assets/assets/images/about_us/parts.jpg'
import A2 from '../../../assets/assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse  items-center">
                <div className="text-center w-1/2 space-y-3 lg:text-left ">
                    <h1 className='text-[#FF3811] font-semibold text-xl'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p className="py-6 text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
                    </p>
                    <button className='text-white bg-[#FF3811] btn'>Get more info</button>
                </div>
                <div className="card  w-1/2 shrink-0 flex flex-col ml-14">
                   <img src={A2} className='w-2/3 relative left-3 rounded-lg' alt="" />
                   <img src={A1} className='w-1/2 absolute top-1/2 right-7 border-8 border-white rounded-md' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;