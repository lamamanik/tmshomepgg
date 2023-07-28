import React from "react";
import logo from "../assets/brand.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMobile,
  AiFillYoutube,
  AiOutlineBranches,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUsergroupDelete,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1500px] bg-[#071952] px-20 text-white  py-16 grid lg:grid-cols-3 gap-8 text-black-300">
      <div>
        <div className="flex flex-row justify-left items-center gap-0 my-1">
          <div>
            <img class="w-16" src={logo} alt="brand.logo" />
          </div>

          <div>
            <h1 className="w-full text-3xl m-4 font-bold text-[#00d9fa]">
              TMS
            </h1>
          </div>
        </div>

        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos
          rem nobis ducimus accusantium debitis, fuga soluta quasi quos. Sunt
          molestiae error pariatur soluta adipisci veniam nemo velit temporibus
          aperiam.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube size={30} />
          </a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter size={30} />
          </a>
          <a
            href="https://www.facebook.com/manik.lama.798278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook size={30} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Ecommerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Ecommerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">claim</li>
            <li className="py-2 text-sm">ploicy</li>
            <li className="py-2 text-sm">terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
