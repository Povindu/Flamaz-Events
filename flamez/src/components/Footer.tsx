import Insta from "../assets/SocialIcons/Instagram.png";
import Facebook from "../assets/SocialIcons/Facebook.png";
import Twitter from "../assets/SocialIcons/icons8-twitter-squared-50.png";
import FlamezLogo from "../assets/flamezLogo.png";

export default function footer() {
  return (
    <div className="bg-zinc-900 text-white text-sm h-72 pt-12 font-poppins">
      <div className="grid grid-cols-4 text-center align-middle mb-10">
        <div className="pt-12 text-lg">
          <img src={FlamezLogo} alt="Flamez Logo" className="w-28 h-fit m-auto" />
          <p className="w-full m-auto leading-5">
            <span className="text-amber-500">Flamez</span> Events & <br />
            Entertainment
          </p>
          
        </div>
        <div className="pt-12">
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          (Slogan)
        </div>
        <div className="pt-6">
          <h3 className="font-semibold mb-3">Helpful Links</h3>
          <ul>
            <li>Link 1</li>
            <li className="pt-1">Link 2</li>
            <li className="pt-1">Link 3</li>
          </ul>
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
