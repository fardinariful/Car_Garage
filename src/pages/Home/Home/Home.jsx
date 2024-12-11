import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Services from "../Service/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div className="space-y-8">
             <Banner></Banner> 
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Team></Team> 
            <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;