import api from "../../../services/AuthService";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import DefaultTable from "./Comp/Table";

export default function Services() {
  const [services, setServices] = useState<any>([]);

  useEffect(() => {
    api
      .get("services/getAll")
      .then((res) => {
        // console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="h-16 flex flex-row justify-between items-center px-4">
          <p className="text-lg font-poppins uppercase">Add or Edit Services</p>
          <div className=" align-middle justify-center">
            <Button variant="filled" className="float float-end">
              Add Service
            </Button>
          </div>
        </div>

        <DefaultTable data={services} />
      </div>
    </>
  );
}
