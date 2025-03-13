import React from "react";
import MagicButton from "./ui/MagicButton";
import { Mail, Navigation } from "lucide-react";
import { socialMedia } from "@/Data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve you goals.
        </p>
        <a href="mailto:amitsainiwork9@gmail.com">
          <MagicButton
            title={"Let's get is touch"}
            icon={<Navigation fill="white" />}
            position="right"
            position2="left"
            icon2={<Mail />}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Amit Saini
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="size-10 cursor-pointer flex justify-center items-center backdrop-opacity-20 backdrop-blur-lg saturate-200 bg-black-200/75 rounded-lg border border-black-300"
            >
              <a href={link}>
                <img src={img} alt={img} height={20} width={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
