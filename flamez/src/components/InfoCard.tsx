import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  imageLinks: string[];
}

export default function InfoCard({ title, description, imageLinks }: Props) {
  return (
    <Card
      shadow={false}
      className="group relative grid w-full overflow-hidden rounded-3xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 font-poppins ring-1 ring-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <CardBody className="w-full relative flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 p-6 lg:p-10">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl transition-opacity duration-300 group-hover:opacity-90" />

        <div className="w-full lg:max-w-[560px] h-full flex flex-col justify-center">
          <Typography variant="h2" color="black" className="mb-3 text-3xl lg:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {title}
          </Typography>
          <Typography className="text-base lg:text-lg text-gray-700 leading-relaxed">
            {description.substring(0, 280)}
            {description.length > 280 && "..."}
          </Typography>
        </div>
        <div className="w-full h-full">
          <DefaultGallery images={imageLinks} />
        </div>
      </CardBody>
    </Card>
  );
}

function DefaultGallery({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clampedImages = useMemo(() => images ?? [], [images]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const handleScroll = () => {
      const width = container.clientWidth;
      const index = Math.round(container.scrollLeft / Math.max(width, 1));
      setCurrentIndex(Math.min(Math.max(index, 0), Math.max(clampedImages.length - 1, 0)));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll as EventListener);
  }, [clampedImages.length]);

  const scrollToIndex = (idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const width = container.clientWidth;
    container.scrollTo({ left: width * idx, behavior: "smooth" });
    setCurrentIndex(idx);
  };

  const prev = () => scrollToIndex(Math.max(currentIndex - 1, 0));
  const next = () => scrollToIndex(Math.min(currentIndex + 1, Math.max(clampedImages.length - 1, 0)));

  if (!clampedImages.length) return null;

  return (
    <div className="relative w-full">
      {/* viewport */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory flex gap-4 pr-4 -mr-4 rounded-2xl ring-1 ring-gray-200 bg-white/40"
      >
        {clampedImages.map((src, i) => (
          <div key={i} className="relative snap-center shrink-0 w-full h-56 sm:h-64 lg:h-80 xl:h-96 overflow-hidden rounded-2xl">
            <img
              src={src}
              alt={`carousel-image-${i}`}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0" />
          </div>
        ))}
      </div>

      {/* controls */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 ring-1 ring-gray-200 shadow transition hover:bg-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 ring-1 ring-gray-200 shadow transition hover:bg-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* dots */}
      <div className="mt-4 flex w-full items-center justify-center gap-2">
        {clampedImages.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={
              `h-2.5 rounded-full transition-all duration-300 ` +
              (i === currentIndex ? "w-6 bg-gray-800" : "w-2.5 bg-gray-300 hover:bg-gray-400")
            }
          />
        ))}
      </div>
    </div>
  );
}
