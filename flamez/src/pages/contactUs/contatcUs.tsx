import React from "react";

import logo from "../../assets/flamezLogo.png";
import NavbarSimple from "../../components/NavbarSimple.tsx";
import { FaLocationDot } from "react-icons/fa6";

export default function contatcUs() {
  return (
    <div>
      <NavbarSimple />
      <div
        className="flex flex-row mt-8 justify-center items-center"
      >
        <div className=" w-[50%]">
          <img src={logo} alt="logo" className="w-[60%] m-auto p-20" />
        </div>
        <div className="w-[50%] p-20">
          <p className="text-xl text-center">
            Relax and enjoy your special moments while we take care of all the
            details. Our promise is to make event planning stress-free and
            enjoyable for you.
          </p>

          <div className="p-10 mt-20">
            <p className="mb-8 text-2xl text-amber-500">Get in touch</p>
            <div className="flex flex-row">
              <div className="w-[50%]">
                <FaLocationDot className="mb-2" />
                <p>Pepiliyana Road, Boralesgamuwa.</p>
              </div>
              <div className="w-[50%]">
                <FaLocationDot className="mb-2" />
                <p>Gatmbe Rd, Kidelpitiya</p>
              </div>
            </div>
          </div>
          <div className="p-10">
            <p className="text-xl mb-2 text-amber-500">
              We are here to talk about your plans.{" "}
            </p>
            <p>071 013 3491  |  077 459 8115  |  076 123 6357</p>
          </div>
        </div>
      </div>
    </div>
  );
}
