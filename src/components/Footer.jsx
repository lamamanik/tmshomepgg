import React from "react";
import logo from "../assets/brand.png";
import Fade from "react-reveal/Fade";
import bgimg from "../assets/bgimg7.jpg";
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
    <div
      className=" bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgimg}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="max-w-[1700px]  px-28 text-white justify-center  py-16 grid lg:grid-cols-3 gap-24 text-black-300">
        <Fade bottom>
          <div className="">
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
              This task and user management system, including all its
              components, content, and related materials, is protected by
              copyright laws and international treaties. Unauthorized
              reproduction, distribution, or use of any part of this system may
              result in severe civil and criminal penalties, and will be
              prosecuted to the maximum extent possible under the law.
              <br />
              <br />
              Copyright © 2023 TMS. All rights reserved.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <a
                href="https://www.youtube.com/@chiranrajthapa420"
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
          <div className="lg:col-span-2 flex justify-between mt-10 ">
            <div>
              <h6 className="font-medium text-gray-400">Contact</h6>
              <ul>
                <li className="py-2 text-sm">TSM</li>
                <li className="py-2 text-sm">Basundara,Kathmandu</li>
                <li className="py-2 text-sm">01-107356</li>
                <li className="py-2 text-sm">TMS.2023@gmail.com</li>
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
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
