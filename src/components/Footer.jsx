import React from "react";
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
        <h1 className="w-full text-3xl font-bold text-white"></h1>
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
          <h6 className="font-medium text-gra">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Ecommerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gra">Support</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Ecommerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gra">Legal</h6>
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
