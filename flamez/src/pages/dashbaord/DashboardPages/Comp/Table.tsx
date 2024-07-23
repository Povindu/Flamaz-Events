import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Title", "Description", "Photos", ""];

export default function DefaultTable({ data }: { data: any }) {
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
                title,
                description,
                photoArray,
              }: { title: string; description: string; photoArray: any[] },
              index: number
            ) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

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
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
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
