import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
    

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let's Connect! Feel free to reach out
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          if you'd like to discuss opportunities, projects, or just want to chat
        </p>
        <a href="mailto:osakakpv@gmail.com">
          <MagicButton
            title="my email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;