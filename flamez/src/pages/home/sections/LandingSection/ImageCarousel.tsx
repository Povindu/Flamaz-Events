import { Carousel } from "flowbite-react";

export default function Component() {
  return (
    <div className="h-full lg:relative">
      <div className="h-64  sm:h-64 lg:h-96 2xl:h-96">
        <Carousel slideInterval={3000} leftControl="." rightControl=".">
          <img
            src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="w-full lg:absolute lg:top-0 left-0 text-center lg:text-left pb-10 pt-10 mb-32 lg:pl-36 lg:h-96 xl:pt-12 lg:bg-gradient-to-r from-white to-yellow-500/0 h-56 sm:h-64 2xl:h-96">
        <h2 className="text-3xl lg:text-5xl font-bold text-black">
          <span className="text-amber-500">FLAMEZ</span> EVENTS & <br />
          ENTERTAINMENT
        </h2>
        <p className="text-black text-sm font-normal w-60 m-auto lg:m-0 text lg:text-justify lg:w-96 lg:text-base">
          <br />
          Every event is beautiful in its own way, but yours should be unique.
          That is why your occasion deserves our careful planning. So let us
          handle the stress so your event is a success.
        </p>
        <button className="mt-10 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
          Request Quote
        </button>
      </div>
    </div>
  );
}
