import api from "../../../../services/AuthService";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import DefaultTable from "../../../../components/Table";

import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    api
      .get("events/getAll")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="h-16 flex flex-row justify-between items-center px-4">
          <p className="text-lg font-poppins uppercase">Add or Edit Events</p>
          <div className=" align-middle justify-center">
            <Button
              variant="filled"
              className="float float-end"
              onClick={() => {
                navigate("/dashboard/createEvent");
                //
              }}
            >
              Add Event
            </Button>
          </div>
        </div>

        <DefaultTable data={events} path={"event"} />
      </div>
    </>
  );
}
