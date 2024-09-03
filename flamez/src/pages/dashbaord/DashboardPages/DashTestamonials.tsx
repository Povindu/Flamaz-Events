import api from "../../../services/AuthService";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import DefaultTable from "./Comp/Table";

import { useNavigate } from "react-router-dom";

export default function Testamonials() {
  const navigate = useNavigate();
  const [Testamonials, setTestamonials] = useState<any>([]);

  useEffect(() => {
    api
      .get("Testamonials/getAll")
      .then((res) => {
        
        setTestamonials(res.data);
      })
      .catch((err) => {
        
      });
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="h-16 flex flex-row justify-between items-center px-4">
          <p className="text-lg font-poppins uppercase">Add or Edit Testamonials</p>
          <div className=" align-middle justify-center">
            <Button
              variant="filled"
              className="float float-end"
              onClick={() => {
                navigate("/dashboard/createService");
                // 
              }}
            >
              Add Service
            </Button>
          </div>
        </div>

        <DefaultTable data={Testamonials} />
      </div>
    </>
  );
}
