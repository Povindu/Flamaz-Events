import React from "react";

export default function OurServices() {
  return (
    <div className="flex justify-center font-poppins">
      <div className="h-80 w-[80%] pt-20 text-center shadow-[0_0px_60px_-5px_rgba(0,0,0,0.07)] mb-20 mt-20 rounded-xl">
      <h1 className="text-4xl text-center font-bold mb-3">
        Our <span className="text-amber-500">Services</span>
      </h1>
      <p className="w-80 md:w-full font-sm m-auto mb-10">Check out wide variety of services we offer for our clients</p>
      <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold">
        Checkout Services
      </button>
    </div>
    </div>
  );
}
