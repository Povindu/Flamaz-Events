import { Card, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../services/AuthService";
const TABLE_HEAD = ["Title", "Description", "Photos", "", ""];

export default function DefaultTable({ data }: { data: any }) {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    console.log("id", id);
    const res = await api
      .delete(`services/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data);
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
                title,
                description,
                photoArray,
              }: {
                _id: string;
                title: string;
                description: string;
                photoArray: any[];
              },
              index: number
            ) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-3"
                : "p-3 border-b border-blue-gray-50";

              return (
                <tr key={title}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
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
                      className="font-normal"
                    >
                      {photoArray.length}
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
