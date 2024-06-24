import React from "react";

export default function CardCarousal() {
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:mb-4 lg:mt-20 lg:mx-20 md:mx-20 mx-5 uppercase font-bold text-3xl text-gray-800">
        What we do
      </h1>
      <div className="flex overflow-x-scroll pb-10 card-carousal-hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-16 md:ml-20 ml-10 text-center text-xl">
          <div className="inline-block px-3">
            <div className=" w-60 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="test"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3">Cooperate & Conferences</div>
          </div>
          <div className="inline-block px-3">
            <div className="w-60 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D6"
                alt="test"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3">Equipment Rentals</div>
          </div>
          <div className="inline-block px-3">
            <div className=" w-60 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="test"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3">Themed Parties</div>
          </div>
          <div className="inline-block px-3">
            <div className="w-60 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D6"
                alt="test"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3">Weddings</div>
          </div>
          <div className="inline-block px-3">
            <div className=" w-60 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="test"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-3">Printing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
