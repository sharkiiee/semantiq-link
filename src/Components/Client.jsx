import star from "../assets/client-images/star.svg";
import person from "../assets/client-images/person.svg";
import closingQuote from "../assets/client-images/closingQuote.svg";
import openingQuote from "../assets/client-images/openingQuote.svg";

export default function Client() {
  const client = (
    <div
      className="flex flex-col justify-center w-[20rem] relative p-2 border-r border-t flex-wrap"
      // style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px -1.95px 2.6px" }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={person} alt="" className="w-24 absolute -top-10" />
      </div>
      <div className="mt-16 text-center">
        <p className="text-sm font-medium">Rajeev Malhotra</p>
        <p className="text-xs">Marketing Head, Trivanta FMCG</p>
        <div className="flex justify-center gap-2 my-4">
          <img className="w-4" src={star} alt="" />
          <img className="w-4" src={star} alt="" />
          <img className="w-4" src={star} alt="" />
          <img className="w-4" src={star} alt="" />
          <img className="w-4" src={star} alt="" />
        </div>
      </div>

      <div>
        <img src={openingQuote} alt="" className="w-5"/>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum is simply dummy text
        </p>
        <div className="flex justify-end">
          <img src={closingQuote} alt="" className="w-5"/>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-24 px-20 flex gap-16">
      <div className="w-[40%]">
        <h3 className="flex flex-col">
           <span className="uppercase text-3xl mb-2 font-bold text-[#1c3a5b]">what our clients</span> <span className="uppercase text-3xl mb-2 font-bold text-[#475e88]">          say?</span>
        </h3>
        {/* <h3 >

        </h3> */}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button className="rounded-full px-8 py-0.5 border border-myBlue mt-6 text-myBlue hover:bg-orange-300 hover:text-white hover:border-none h-9">
          View All
        </button>
      </div>
      <div className="flex gap-10 w-[60%]">
        {client}
        {client}
        {client}
      </div>
    </div>
  );
}
