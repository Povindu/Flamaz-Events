import NavbarSimple from "../../components/NavbarSimple";
import axios from "axios";
import { useEffect, useState } from "react";

import InfoCard2 from "../../components/InfoCard";

export default function Events() {
  const [events, setEvents] = useState<any>([]);

  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}events/getAll`)
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  return (
    <div>
      <NavbarSimple />

      {events.length > 0 &&
        events.map(
          (
            eventItem: {
              title: string;
              description: string;
              photoArray: string[];
            },
            index: number
          ) => {
            return (
              <InfoCard2
                key={index}
                title={eventItem.title}
                description={eventItem.description}
                imageLinks={eventItem.photoArray}
              />
            );
          }
        )}
    </div>
  );
}
