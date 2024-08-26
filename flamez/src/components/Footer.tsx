import Insta from "../assets/SocialIcons/Instagram.png";
import Facebook from "../assets/SocialIcons/Facebook.png";
import Twitter from "../assets/SocialIcons/icons8-twitter-squared-50.png";
import FlamezLogo from "../assets/flamezLogo.png";

export default function footer() {
  return (
    <div className="bg-zinc-900 text-white lg:h-72 text-sm pt-12 font-poppins ">
      <div className="grid lg:grid-cols-3 grid-row-3 text-center align-middle mb-10">
        <div className="pt-12 text-lg">
          <img
            src={FlamezLogo}
            alt="Flamez Logo"
            className="w-28 h-fit m-auto"
          />
          <p className="w-full m-auto leading-5">
            <span className="text-amber-500">Flamez</span> Events & <br />
            Entertainment
          </p>
        </div>
        <div className="pt-12 md:w-full w-[85%] mx-auto">
          Flamez Events & Entertainment is a full-service event management
          company that specializes in creating memorable experiences for
          corporate and private clients. Our team of experienced professionals
          will work with you to plan, design, and execute events that exceed
          your expectations.
        </div>
        <div className="pt-6">
          <h3 className="font-semibold mb-3">Reach us</h3>
          <ul className="">
            <li>flamezevents@gmail.com</li>
            <li className="pt-0">
              071 013 3491 | 077 459 8115 <br /> 076 123 6357
            </li>
            <li className="pt-0">Pepiliyana Road, Boralesgamuwa.</li>
          </ul>
          <ul className="flex flex-row gap-1 w-full m-auto justify-center mt-4">
            <li className="w-6 h-auto">
              <img src={Insta}></img>
            </li>
            <li className="w-6 h-auto">
              <img src={Facebook}></img>
            </li>
            <li className="w-6 h-auto">
              <img src={Twitter}></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs pb-2">
        © 2024 Flamez Events. All rights reserved
      </div>
    </div>
  );
}
