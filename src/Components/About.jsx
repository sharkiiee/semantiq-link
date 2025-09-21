import bgAbout from "/Group 24.svg";
import logo1 from "/logo1.svg";
import logo2 from "/logo2.svg";
import logo3 from "/logo3.svg";

export default function About() {
  const logoClass = "w-auto h-[7rem]";
  const numberClass = "text-xl font-bold text-myBlue text-5xl";
  return (
    <div className="relative text-center">
      <img src={bgAbout} alt=""/>
      <div className="absolute top-6 p-20 w-full text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold bg-clip-text text-[#1c3a5b]"
            // style={{
            //   backgroundImage:
            //     "linear-gradient(90deg, #7893CB 10%, #728BC0 14%, #3E557C 54%, #1D3A5B 84%, #0F3051 100%)",
            // }} 
          >
            ABOUT US
          </h2>
          <p className="m-4">
            At Brand Chatters, we're committed to creating an ideal environment
            for talented individuals from around the world to thrive. Whether
            you're looking to expand your digital footprint or build meaningful
            connections online, we're here to help you reach your goals.
          </p>
          <p>
            Our core offerings include high-quality link insertion and guest
            posting services, tailored to meet your unique needs. With a
            client-first approach, our dedicated team works with precision,
            integrity, and care-always putting your objectives at the
            forefront.
          </p>
          <button className="rounded-full px-8 py-1 border border-myBlue my-6 text-myBlue hover:bg-orange-300 hover:text-white hover:border-none" >Read More</button>
        </div>
        <ul className="flex justify-between mt-10 text-left">
          <li className="flex gap-4">
            <img src={logo1} alt="" className={logoClass} />
            <div className="py-4">
              <p className={numberClass}>71428+</p>
              <p>Registered Websites</p>
            </div>
            <div className="h-20 border-l border-grey"></div>
          </li>
          <li className="flex gap-4">
            <img src={logo2} alt="" className={logoClass}/>
            <div className="py-4">
              <p className={numberClass}>3,194+</p>
              <p>Publishers & Writers</p>
            </div>
            <div className="h-20 border-l border-grey"></div>
          </li>
          <li className="flex gap-4">
            <img src={logo3} alt="" className={logoClass}/>
            <div className="py-4">
              <p className={numberClass}>32,031+</p>
              <p>Task Completed</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
