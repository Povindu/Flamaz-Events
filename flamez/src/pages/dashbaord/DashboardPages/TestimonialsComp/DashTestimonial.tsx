import api from "../../../../services/AuthService";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import DefaultTable from "./Comp/Table";

import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<any>([]);

  useEffect(() => {
    api
      .get("testimonials/getAll")
      .then((res) => {
        console.log(res.data);
        setTestimonials(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="h-16 flex flex-row justify-between items-center px-4">
          <p className="text-lg font-poppins uppercase">
            Add or Edit Testimonials
          </p>
          <div className=" align-middle justify-center">
            <Button
              variant="filled"
              className="float float-end"
              onClick={() => {
                navigate("/dashboard/createTestimonial");
                //
              }}
            >
              Add Testimonial
            </Button>
          </div>
        </div>

        <DefaultTable data={testimonials} />
      </div>
    </>
  );
}
