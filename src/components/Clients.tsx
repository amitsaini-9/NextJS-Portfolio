import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/Data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind Words From <span className="text-purple"> Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Clients;
