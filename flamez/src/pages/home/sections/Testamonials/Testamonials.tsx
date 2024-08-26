const data = [
  {
    id: 1,
    testimonial:
      "I had the pleasure of working with Flamez Events & Entertainment for Leo Sixers Cricket carnival organised by the Leo Club of SLIIT, on 9th April 2023. Overall, my experience with the company was positive. The team was professional, organized, and detail-oriented throughout the planning and execution process.",
    author: "Tharush Senasinghe",
    position: "Vice president at Leo Club of SLIIT",
    image:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    id: 2,
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    author: "Distinctio Animi",
    position: "Aliquam illum",
    image:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    id: 3,
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    author: "Distinctio Animi",
    position: "Aliquam illum",
    image:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    id: 4,
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    author: "Distinctio Animi",
    position: "Aliquam illum",
    image:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    id: 5,
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    author: "Distinctio Animi",
    position: "Aliquam illum",
    image:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    id: 6,
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    author: "Distinctio Animi",
    position: "Aliquam illum",
    image:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
];

export default function Testamonials() {
  return (
    <div>
      <section className=" dark:bg-gray-100 dark:text-gray-800 mt-24">
        <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
          <h1 className="text-4xl text-center font-bold mb-5">
            Customer <span className="text-amber-500">Testamonials</span>
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto w-full lg:w-full lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2">
          {data.map((testimonial, index) => (
            <div
              className="flex flex-col max-w-sm mx-1 my-3 shadow-lg"
              key={index}
            >
              <div className=" px-1 pt-6 pb-12 rounded-t-lg dark:bg-gray-50 lg:h-64">
                <p className="relative px-3 py-1 text-md italic text-center dark:text-gray-800" >
                {testimonial.testimonial.substring(0, 400)}
                {testimonial.testimonial.length > 400 && "..."}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">
                  {testimonial.author}
                </p>
                <p className="text-sm uppercase">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
