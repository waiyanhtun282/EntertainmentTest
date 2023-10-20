import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import gogolePlay from "../../assets/en_badge_web_generic.png";
import applePlay from "../../assets/images.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-300   ">
      <div className="container mx-auto md:h-[250px] py-5 md:py-3">
        <ul className="md:flex md:justify-between  grid  grid-cols-2 justify-items-center">
          <li className=" ">
            <h3 className=" lg:text-[21px] my-3 text-[20px] ">Logo</h3>
            <div className=" text-[17px] lg:space-y-6 space-y-4">
              <p>Slogan</p>
              <p></p>
              <p className=" flex flex-col lg:gap-3 gap-2 ">
                <span> Contact</span>
                <span>+24534534</span>
                <span>+245923423</span>
              </p>
            </div>
          </li>
          <li>
            <h3 className=" lg:text-[21px] lg:my-3 text-[20px]  my-2">Quick Links</h3>
            <div className=" text-[17px]  ">
              <p>Home</p>
              <p>Concerts</p>
              <p>Arts</p>
              <p>Sports</p>
              <p>Funs</p>
              <p>hights</p>
            </div>
          </li>
          <li>
            <h3 className=" lg:text-[21px] lg:my-3 text-[20px] my-2">Others</h3>
            <div className=" text-[17px] ">
              <p>Support</p>
              <p>Trems & Condition</p>
              <p>Privacy Polices</p>
              <p>FAQS</p>
              <p>Careers</p>
            </div>
          </li>
          <li>
            <h3 className=" lg:text-[21px] lg:my-3 text-[20px] my-2">Follow us On</h3>
            <div className=" flex gap-3 lg:my-3 my-2">
              <FaFacebook className="lg:text-3xl text-2xl" />
              <FaLinkedin className="lg:text-3xl text-2xl" />
              <FaTwitter className="lg:text-3xl text-2xl" />
            </div>
            <h3 className=" lg:text-[18px] text-[17px]">Download From</h3>
            <div className=" flex flex-col justify-start">
              <img src={gogolePlay} className="md:w-28  w-24" alt="googlePlay" />
              <img src={applePlay} className="md:w-28 w-24"  alt="applePlay"/>

            </div>
          </li>
        </ul>
      </div>

      <h3 className=" lg:py-3  lg:text-[20px] bg-gray-400 text-center py-2 text-[18px]">
        CopyRight&copy;2023 By Leo
      </h3>
    </footer>
  );
};

export default Footer;
