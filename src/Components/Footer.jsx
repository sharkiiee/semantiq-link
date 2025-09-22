import group from "/Group.svg";
import instagram from "../assets/footer-images/Instagram.svg";
import facebook from "../assets/footer-images/Facebook.svg";
import linkedIn from "../assets/footer-images/LinkedIn.svg";
import vector from "../assets/footer-images/Vector.svg";
import x from "../assets/footer-images/X.svg";
import mail from "../assets/footer-images/mail.svg";
import phone from "../assets/footer-images/phone.svg";
import youtube from "../assets/footer-images/Youtube.svg";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-20 px-10">
      <div className="max-w-7xl mx-auto flex justify-between gap-8">
        {/* Logo + About */}
        <div className="w-[40%]">
          <img src={group} alt="" />
          <p className="mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-blue-900 text-xl mb-4">QUICK LINKS</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Guest Sites</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-blue-900 text-xl mb-4">
            IMPORTANT LINKS
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#">Refund</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Reseller Rules</a>
            </li>
            <li>
              <a href="#">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="#">Guest Post</a>
            </li>
            <li>
              <a href="#">Link Building</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <div className="flex gap-4">
          <div>
            <h3 className="font-bold text-blue-900 text-xl mb-4">CONTACT US</h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-center space-x-2">
                <span>
                  <img src={phone} alt="" className="w-4"/>
                </span>
                <span>+91 999 999 9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>

                  <IoMdMail style={{fontSize:"1.2rem"}}/>
                </span>
                <span>info@brandchatters.com</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="w-28 h-40 bg-[#475e88] rounded-full flex flex-col items-center justify-center text-white text-center"
            >
              ENQUIRE
              <br />
              NOW →
            </a>
          </div>
        </div>
          <div className="flex space-x-6 mt-8">
              <img className="w-10" src={facebook} alt="" />
            
              <img className="w-10" src={instagram} alt="" />
            
              <img className="w-10" src={x} alt="" />
            
              <img className="w-10" src={youtube} alt="" />
            
              <img className="w-10" src={linkedIn} alt="" />
          </div>
        </div>
      </div>

      {/* Social Icons */}

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-16"mt-16>
        © Brand Chatters 2025 | All Rights Reserved
      </div>
    </footer>
  );
}
