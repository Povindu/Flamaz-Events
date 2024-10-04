import { Card, CardBody, Typography } from "@material-tailwind/react";

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
  return (
    <div className="p-5">
      <Card className="mt-6 w-full">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-5 text-xl  rounded-3xl py-1 pl-5 "
          >
            {title}
          </Typography>
          <Typography className="mb-5 text-md pl-5 ">{description}</Typography>
          <DefaultGallery images={imageLinks} />
        </CardBody>
      </Card>
    </div>
  );
}

export function DefaultGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={image}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
