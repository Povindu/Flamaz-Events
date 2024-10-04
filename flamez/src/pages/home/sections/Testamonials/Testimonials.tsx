const data = [
  {
    id: 1,
    testimonial:
      "I had the pleasure of working with Flamez Events & Entertainment for Leo Sixers Cricket carnival organised by the Leo Club of SLIIT, on 9th April 2023. Overall, my experience with the company was positive. The team was professional, organized, and detail-oriented throughout the planning and execution process.",
    author: "Tharush Senasinghe",
    position: "Vice president at Leo Club of SLIIT",
    image:
      "https://res.cloudinary.com/dqurl8r48/image/upload/v1725275719/Testamonials%20Sample/piwqnuwrlmkyo4si1xha.jpg",
  },
  {
    id: 2,
    testimonial:
      " Absolutely delighted with the service we received from Flamez Events & Entertainments for our company pirith ceremony at LOLC IT Premises! From start to finish, their team provided exceptional support and attention to detail. The lighting, marquees, sound system, decorations, and furniture were all top-notch, creating a truly memorable and elegant event. Their professionalism and expertise were evident throughout, ensuring everything ran smoothly and looked fantastic. Highly recommend Flamez Events & Entertainments for anyone seeking high quality event services. ",
    author: "Osura Perera",
    position: "Software Engineer at LOLC Technologies Limited",
    image:
      "https://res.cloudinary.com/dqurl8r48/image/upload/v1725275718/Testamonials%20Sample/jjhlebgtor9nk163cpv1.jpg",
  },
  {
    id: 3,
    testimonial:
      " We’ve had the pleasure of working with Flamez Events & Entertainments for various events and functions at Sakya Institute, and their service has consistently been outstanding. From their impeccable setup of lighting and sound systems to the beautiful decorations and well-arranged furniture, they’ve truly elevated every event we've hosted. ",
    author: "Erandi Alahakoon",
    position: "Sakya Institute Nugegoda",
    image:
      "https://res.cloudinary.com/dqurl8r48/image/upload/v1725275720/Testamonials%20Sample/inrsraxti6ttuucmg4jn.jpg",
  },
  {
    id: 4,
    testimonial:
      " We’ve partnered with Flamez Events & Entertainments for our Aurudu Uthsawaya and various other functions at Hayleys Fentons LTD, and the experience has been exceptional. Their provision of LED walls, sound systems, furniture, and decorations was nothing short of spectacular. Each element was perfectly executed, contributing to the success and enjoyment of our events.",
    author: "Thevindu Dissanayake",
    position: "Hayleys Fentons Limited",
    image:
      "https://res.cloudinary.com/dqurl8r48/image/upload/v1725275718/Testamonials%20Sample/rqwb02hdcj10jxauid6x.jpg",
  },
  {
    id: 5,
    testimonial:
      " I couldn't be happier with how my birthday party turned out, thanks to the incredible team at Flamez Events! From the initial planning stages to the final moments of the celebration, they were absolutely phenomenal.",
    author: "Udani Himaranshi Athauda",
    position: "",
    image:
      "https://res.cloudinary.com/dqurl8r48/image/upload/v1725275721/Testamonials%20Sample/mxnir3f4bg5ntvf8rnl6.jpg",
  },
  {
    id: 6,
    testimonial:
      " Highly Recommend!! We got all the equipment we needed for the event on time and with a really nice service ... Well managed and friendly team! ",
    author: "Crownbot Graphics",
    position: "",
    image:
      "https://res.cloudinary.com/dqurl8r48/image/upload/v1725275718/Testamonials%20Sample/m9gioch8a3mhrdeb4geu.jpg",
  },
];

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Testamonials() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const [testimonial, setTestimonials] = useState([]);
  // console.log(baseUrl);

  useEffect(() => {
    axios
      .get(`${baseUrl}testimonials/getAll`)
      .then((res) => {
        console.log(res.data);
        setTestimonials(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className=" text-gray-800 mt-24">
        <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
          <h1 className="text-4xl text-center font-bold mb-5">
            Customer <span className="text-amber-500">Testamonials</span>
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto w-full lg:w-full lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2">
          {testimonial ? (
            testimonial.map((testimonial, index) => (
              <div
                className="flex flex-col max-w-sm mx-1 my-3 shadow-lg min-w-80"
                key={index}
              >
                <div className="px-1 pt-6 pb-1 rounded-t-lg :bg-gray-50 h-64">
                  <p className="relative px-3 py-1 text-sm italic text-center text-gray-800">
                    {testimonial.description.substring(0, 400)}
                    {testimonial.description.length > 400 && "..."}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-b-lg bg-amber-100 text-black">
                  <img
                    src={testimonial.imageLink}
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-300"
                  />
                  <p className="text-large font-semibold leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}
