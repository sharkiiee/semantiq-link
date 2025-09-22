import blog from "../assets/view-icons-images/blog.svg";
import blog2 from "../assets/view-icons-images/blog2.svg";
import arrow from "../assets/view-icons-images/Arrow 10.svg";

export default function View() {
  return (
    <div className="bg-[#f5f5f5] py-24 px-20">
      <div className="flex justify-between">
        <div className="max-w-3xl">
          <h2 className="uppercase text-3xl mb-2 font-bold text-[#1c3a5b]">
            Lorem Ipsum is simply{" "}
          </h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has View All
          </p>
        </div>
        <button className="rounded-full px-8 py-1 border border-myBlue mt-8 text-myBlue hover:bg-orange-300 hover:text-white hover:border-none h-9">
          View All
        </button>
      </div>
      <hr class="border-t border-black/10 m-8" />
      <div className="flex">
        <div className="w-5/12">
          <img src={blog} alt="" className="w-[35rem]" />
          <div className="w-9/12">
            <h4 className="uppercase text-myBlue text-xl font-semibold my-4">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry.
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex gap-4 text-sm font-semibold text-myBlue my-4">
              <p className="uppercase">Read More</p>
              <img src={arrow} alt="" className="w-10" />
            </div>
          </div>
        </div>
        <div class=" w-px bg-black/60 mx-6"></div>
        <div className="flex flex-wrap gap-12 w-[53%]">
          <div className="w-[20rem]">
            <img src={blog2} alt="" />
            <p className="uppercase font-semibold my-4">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry.
            </p>
            <div className="text-sm font-semibold text-myBlue flex gap-4">
              <p className="uppercase">Read More</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="w-[20rem]">
            <img src={blog2} alt="" />
            <p className="uppercase font-semibold my-4">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry.
            </p>
            <div className="text-sm font-semibold text-myBlue flex gap-4">
              <p className="uppercase">Read More</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="w-[20rem]">
            <img src={blog2} alt="" />
            <p className="uppercase font-semibold my-4">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry.
            </p>
            <div className="text-sm font-semibold text-myBlue flex gap-4">
              <p className="uppercase">Read More</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="w-[20rem]">
            <img src={blog2} alt="" />
            <p className="uppercase font-semibold my-4">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry.
            </p>
            <div className="text-sm font-semibold text-myBlue flex gap-4">
              <p className="uppercase">Read More</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
