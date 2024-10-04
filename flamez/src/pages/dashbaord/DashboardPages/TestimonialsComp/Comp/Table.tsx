import { Card, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../../services/AuthService";
const TABLE_HEAD = ["Name", "Position", "Description", "imageLink", "", ""];

export default function DefaultTable({ data }: { data: any }) {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    const res = await api
      .delete(`testimonials/delete/${id}`)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {});
  };

  //
  return (
    <Card className="h-full overflow-scroll w-full font-poppins">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr className=" bg-gray-100">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-gray-100 p-4">
                <Typography className="font-normal leading-none text-black">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                _id,
                name,
                position,
                description,
                imageLink,
              }: {
                _id: string;
                name: string;
                position: string;
                description: string;
                imageLink: string;
              },
              index: number
            ) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-3"
                : "p-3 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {position}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {description.substring(0, 30)}
                      {description.length > 30 && "..."}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={` ${
                        imageLink ? " text-green-500" : "text-red-500"
                      }`}
                    >
                      {imageLink ? "Image Uploaded" : "No image"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to={`/dashboard/editService/${_id}`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Edit
                      </Typography>
                    </Link>
                  </td>
                  <td className={classes}>
                    <Typography
                      onClick={() => handleDelete(_id)}
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
