import group from "/Group.svg";

export default function Navbar() {
  return (
    <nav className="h-[100px] p-6 text-myBlue">
      <div className="flex justify-between mx-auto px-10">
        <img src={group} alt="group" className="h-10 mt-2" />
        <ul className="flex gap-10 p-4">
          <li className="hover:font-bold text-[1.10rem]">HOME</li>
          <li className="hover:font-bold text-[1.10rem]">ABOUT US</li>
          <li className="hover:font-bold text-[1.10rem]">
            <select name="GUEST" id="">
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </li>
          <li className="hover:font-bold text-[1.10rem]">GUEST SITES</li>
          <li className="hover:font-bold text-[1.10rem]">CONTACT US</li>
          <li className="hover:font-bold text-[1.10rem]">
            <button className="rounded-full px-6  border border-myBlue hover:bg-orange-300 hover:text-white hover:border-none">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
