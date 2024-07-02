import { Carousel } from "flowbite-react";

import EventImage1 from "../../../../assets/EventPhotos/Web Photos (18).jpg";
import EventImage2 from "../../../../assets/EventPhotos/Web Photos (21).jpg";
import EventImage3 from "../../../../assets/EventPhotos/Web Photos (22).jpg";
import EventImage4 from "../../../../assets/EventPhotos/Web Photos (4).jpg";
import EventImage5 from "../../../../assets/EventPhotos/Web Photos (5).jpg";

export default function Component() {
  return (
    <div className="h-full lg:relative font-poppins">
      <div className="h-64  sm:h-64 lg:h-96 2xl:h-96">
        <Carousel slideInterval={3000} leftControl="." rightControl=".">
          <img src={EventImage1} alt="..." />
          <img src={EventImage2} alt="..." />
          <img src={EventImage3} alt="..." />
          <img src={EventImage4} alt="..." />
          <img src={EventImage5} alt="..." />
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
