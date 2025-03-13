"use client";
import React, { useState } from "react";
import animationData from "@/Data/confetti.json";
import MagicButton from "./ui/MagicButton";
import { CopyCheck } from "lucide-react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const EmailCopyComponent = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "amitsainiwork9@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div className="mt-5 relative">
      <div
        className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
      >
        <Lottie
          animationData={animationData}
          loop={copied}
          autoplay={copied}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          height={200}
          width={400}
        />
      </div>

      <MagicButton
        title={copied ? "Email is Copied!" : "Click to Copy my email address"}
        icon={<CopyCheck />}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
    </div>
  );
};

export default EmailCopyComponent;
