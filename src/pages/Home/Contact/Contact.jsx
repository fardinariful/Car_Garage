import img1 from '../../../assets/assets/images/contact/001-timetable.png'
import img2 from '../../../assets/assets/images/contact/Group 34.png'
import img3 from '../../../assets/assets/images/contact/Group 35.png'
const Contact = () => {
    return (
        <div className='bg-[#151515] rounded-lg flex flex-row justify-around p-20'>
            <div className='flex flex-row justify-center items-center gap-5'>
                <img src={img1} alt="" />
                <div className='text-white'>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-5'>
                <img src={img2} alt="" />
                <div className='text-white'>
                    <p>Have a question?</p>
                    <p className='text-2xl'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-5'>
                <img src={img3} alt="" />
                <div className='text-white'>
                    <p>Need a repair? our address</p>
                    <p className='text-2xl'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;