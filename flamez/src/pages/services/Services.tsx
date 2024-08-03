import NavbarSimple from "../../components/NavbarSimple";
import ServicesSectionComp2 from "./Comp/ReServicesSectionComp";

import api from "../../services/AuthService";
import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState<any>([]);
  useEffect(() => {
    api
      .get("services/getAll")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavbarSimple />
      {services.length > 0 &&
        services.map(
          (
            serviceItem: {
              title: string;
              description: string;
              photoArray: string[];
            },
            index: any
          ) => {
            return (
              <ServicesSectionComp2
                key={index}
                title={serviceItem.title}
                description={serviceItem.description}
                imageLinks={serviceItem.photoArray}
              />
            );
          }
        )}
    </div>
  );
}
