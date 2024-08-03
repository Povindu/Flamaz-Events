import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import fetchedUrl from "../../../assets/EventPhotos/Web Photos (1).jpg";
interface Props {
  title: string;
  description: string;
  imageLinks: string[];
}

export default function ServicesSectionComp({
  title,
  description,
  imageLinks,
}: Props) {
  console.log("title", title);
  console.log("description", description);
  console.log("imageLinks", imageLinks);
  return (
    <Card
      shadow={false}
      className="relative grid h-fill lg:h-[400px] w-full justify-center overflow-hidden text-center rounded-none font-poppins"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{
          backgroundImage: `url(${imageLinks[0] || fetchedUrl})`,
        }}
        className="absolute inset-0 m-0 h-full w-ful rounded-none bg-[image:var(--image-url)] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-r from-black/80 via-black/70 to-black/30 " />
      </CardHeader>
      <CardBody className="w-full relative flex flex-col lg:flex-row align-middle ">
        <div className="w-full lg:w-[500px] h-full flex flex-col justify-center">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 text-5xl uppercase"
          >
            {title}
          </Typography>
          <Typography className="mb-4 text-gray-200">{description}</Typography>
        </div>
        <div className="flex w-full justify-center lg:w-[900px] h-full">
          <DefaultGallery images={imageLinks} />
        </div>
      </CardBody>
    </Card>
  );
}

export function DefaultGallery({ images }: { images: string[] }) {
  console.log("images", images[0]);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 align-middle">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-40 lg:h-full w-full rounded-lg object-cover object-center"
            src={image}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
