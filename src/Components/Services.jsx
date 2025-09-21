import logo1 from "../assets/services-icons/logo1.svg";
import logo2 from "../assets/services-icons/logo2.svg";
import logo3 from "../assets/services-icons/logo3.svg";
import logo4 from "../assets/services-icons/logo4.svg";
import logo5 from "../assets/services-icons/logo6.svg";
import logo6 from "../assets/services-icons/logo7.svg";
import logo7 from "../assets/services-icons/logo8.svg";
import logo8 from "../assets/services-icons/logo9.svg";
import logo9 from "../assets/services-icons/logo10.svg";
import logo10 from "../assets/services-icons/logo11.svg";
import logo11 from "../assets/services-icons/logo11.svg";
import arrow from "../assets/services-icons/arrow.svg";


const SERVICES = [
    {
    logo: logo1,
    title:"SEARCH ENGINE OPTIMIZATION"
},
    {
    logo: logo2,
    title:"GOOGLE MY BUSINESS OPTIMIZATION"
},
    {
    logo: logo3,
    title:"ONLINE REPUTATION MANAGEMENT"
},
    {
    logo: logo4,
    title:"LINK BUILDING SERVICES"
},
    {
    logo: logo5,
    title:"WEBINAR MARKETING & HOSTING"
},
    {
    logo: logo6,
    title:"LINKEDIN OPTIMIZATION & MANAGEMENT"
},
    {
    logo: logo7,
    title:"YOUTUBE OPTIMIZATION & MANAGEMENT"
},
    {
    logo: logo8,
    title:"APP REVIEWS & OPTIMIZATION"
},
    {
    logo: logo9,
    title:"DEDICATED REVIEW SERVICES"
},
    {
    logo: logo10,
    title:"ECOMMERCE PLATFORM & MARKET PLACES"
},
    {
    logo: logo11,
    title:"SOCIAL MEDIA ORM & ENGAGEMENT"
},
];

export default function Services() {
    return (
        <>
        <div className="bg-[#f5f5f5] py-10 px-20">
            <div>
                <div className="flex justify-between">
                    <div className="max-w-md">
                    <h3 className="text-3xl mb-2 font-bold text-[#1c3a5b]">LOREM IPSUM IS SIMPLY</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                </div>
                    <button className="rounded-full px-8 py-1 border border-myBlue mt-12 text-myBlue hover:bg-orange-300 hover:text-white hover:border-none h-9">View All Services</button>
                </div>
                <hr class="border-t border-black/10 m-8"/>
                <ul className="flex flex-wrap gap-6">
                        {SERVICES.map((obj)=>{
                            return <li key={obj.title} className="h-32 min-w-80 max-w-80 bg-white p-4 rounded-md">
                                <img src={obj.logo} alt={obj.title} className="h-9"/>
                                <div className="flex justify-between mt-4">
                                    <p className="text-sm text-myBlue w-44">{obj.title}</p>
                                <img src={arrow} alt="arrow" className="h-9"/>
                                </div>
                            </li>
                        })}
                    </ul>
            </div>
        </div>
        <div className="py-10 px-20 flex justify-between">
            <div className="max-w-3xl"><h2 className="uppercase text-3xl mb-2 font-bold text-[#1c3a5b]">Why need paid guest post to increase</h2>
            <h3 className="uppercase text-3xl mb-2 font-bold text-[#475e88]">website SEO ranking?</h3>
            <p>Brand Chatters connects your content with high-traffic, trusted websites. Our expert guest posting and link-building services earn quality backlinks that boost your SEO, traffic, and Google rankings.</p></div>
            <button className="rounded-full px-8 py-1 border border-myBlue mt-12 text-myBlue hover:bg-orange-300 hover:text-white hover:border-none h-9">Get Consult</button>
        </div>
        </>
    );
};