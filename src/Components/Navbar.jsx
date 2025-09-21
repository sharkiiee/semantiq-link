import group from "/Group.svg";

export default function Navbar() {
  return (
    <nav className="h-[80px] p-4 text-myBlue">
      <div className="flex justify-between mx-auto px-8">
        <img src={group} alt="group" className="h-8 mt-2" />
        <ul className="flex gap-10 p-2">
          <li className="hover:font-bold">HOME</li>
          <li className="hover:font-bold">ABOUT US</li>
          <li className="hover:font-bold">
            <select name="GUEST" id="">
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </li>
          <li className="hover:font-bold">GUEST SITES</li>
          <li className="hover:font-bold">CONTACT US</li>
          <li className="hover:font-bold">
            <button className="rounded-full px-6 pb-1 border border-myBlue hover:bg-orange-300 hover:text-white hover:border-none">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
