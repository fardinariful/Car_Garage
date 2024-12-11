import b1 from '../../../assets/assets/images/banner/B1.jpg'
import b2 from '../../../assets/assets/images/banner/B2.jpg'
import b3 from '../../../assets/assets/images/banner/B3.jpg'
import b4 from '../../../assets/assets/images/banner/B4.jpg'
import b5 from '../../../assets/assets/images/banner/B5.jpg'
import b6 from '../../../assets/assets/images/banner/B6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={b1}
                    className="w-full h-[90vh]" />
                <div className="absolute left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-20 pt-36'>
                        <h2 className='text-white text-2xl lg:text-6xl font-semibold'>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='text-white font-normal lg:text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-error text-white btn-outline'> Discover More </button>
                            <button className='btn btn-error text-white btn-outline'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={b2}
                    className="w-full h-[90vh]" />
                <div className="absolute left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-20 pt-36'>
                        <h2 className='text-white text-2xl lg:text-6xl font-semibold'>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='text-white font-normal lg:text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-error text-white btn-outline'> Discover More </button>
                            <button className='btn btn-error text-white btn-outline'> Latest Project</button>
                        </div>
                    </div>
                </div>   
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={b3}
                    className="w-full h-[90vh]" />
                <div className="absolute left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-20 pt-36'>
                        <h2 className='text-white text-2xl lg:text-6xl font-semibold'>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='text-white font-normal lg:text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-error text-white btn-outline'> Discover More </button>
                            <button className='btn btn-error text-white btn-outline'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={b4}
                    className="w-full h-[90vh]" />
                <div className="absolute left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-20 pt-36'>
                        <h2 className='text-white text-2xl lg:text-6xl font-semibold'>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='text-white font-normal lg:text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-error text-white btn-outline'> Discover More </button>
                            <button className='btn btn-error text-white btn-outline'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={b5}
                    className="w-full h-[90vh]" />
                <div className="absolute left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-20 pt-36'>
                        <h2 className='text-white text-2xl lg:text-6xl font-semibold'>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='text-white font-normal lg:text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-error text-white btn-outline'> Discover More </button>
                            <button className='btn btn-error text-white btn-outline'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={b6}
                    className="w-full h-[90vh]" />
                <div className="absolute left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-4 pl-20 pt-36'>
                        <h2 className='text-white text-2xl lg:text-6xl font-semibold'>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='text-white font-normal lg:text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-error text-white btn-outline'> Discover More </button>
                            <button className='btn btn-error text-white btn-outline'> Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;