import React from "react";
import EventImage1 from "../../assets/EventPhotos/Web Photos (1).jpg";
import EventImage2 from "../../assets/EventPhotos/Web Photos (2).jpg";
import EventImage3 from "../../assets/EventPhotos/Web Photos (3).jpg";
import EventImage4 from "../../assets/EventPhotos/Web Photos (4).jpg";
import EventImage5 from "../../assets/EventPhotos/Web Photos (5).jpg";
import EventImage6 from "../../assets/EventPhotos/Web Photos (6).jpg";
import EventImage7 from "../../assets/EventPhotos/Web Photos (7).jpg";
import EventImage8 from "../../assets/EventPhotos/Web Photos (8).jpg";
import EventImage9 from "../../assets/EventPhotos/Web Photos (9).jpg";
import EventImage10 from "../../assets/EventPhotos/Web Photos (10).jpg";

export default function FeaturedImageGallery() {
  const data = [
    {
      imgelink: EventImage1,
    },
    {
      imgelink: EventImage2,
    },
    {
      imgelink: EventImage3,
    },
    {
      imgelink: EventImage4,
    },
    {
      imgelink: EventImage5,
    },
    {
      imgelink: EventImage6,
    },
    {
      imgelink: EventImage7,
    },
    {
      imgelink: EventImage8,
    },
    {
      imgelink: EventImage9,
    },
    {
      imgelink: EventImage10,
    },

  ];

  const [active, setActive] = React.useState(EventImage1);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-10 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
