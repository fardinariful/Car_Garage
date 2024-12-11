import logo from '../../../assets/assets/logo.svg'
const Footer = () => {
    return (
        <footer className="footer bg-[#151515] text-base-content p-10">
            <aside>
                <img  src={logo} alt="" />
                <p className='text-[#E8E8E8]'>
                    Discover expert car care and repair services <br /> at your convenience. From maintenance to diagnostics,<br /> we ensure your vehicle runs smoothly and efficiently.
                </p>
                
            </aside>
            <nav>
                <h6 className="footer-title text-white">About</h6>
                <a className="link link-hover text-[#F3F3F3]">Home</a>
                <a className="link link-hover text-[#F3F3F3]">Service</a>
                <a className="link link-hover text-[#F3F3F3]">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#FFFFFF]">Company</h6>
                <a className="link link-hover text-[#F3F3F3]">Why Car Doctor</a>
                <a className="link link-hover text-[#F3F3F3]">About us</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#FFFFFF]">Support</h6>
                <a className="link link-hover text-[#F3F3F3]">Support Center</a>
                <a className="link link-hover text-[#F3F3F3]">Feed Back</a>
                <a className="link link-hover text-[#F3F3F3]">Accessability</a>
            </nav>
        </footer>
    );
};

export default Footer;