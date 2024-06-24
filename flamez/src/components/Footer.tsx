import Insta from "../assets/Instagram.png";
// import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Youtube from "../assets/Youtube.png";

export default function footer() {
  return (
      <div className="bg-black text-white text-sm h-80 pt-12">
        <div className="grid grid-cols-4 text-center align-middle mb-10">
          <div className="pt-12 text-lg">
            <p className="w-full m-auto">
            <span className="text-amber-500">Flamez</span> Events & <br/> Entertainment
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
              <li >Link 1</li>
              <li className="pt-1">Link 2</li>
              <li className="pt-1">Link 3</li>
            </ul>
          </div>
          <div className="pt-6 text-left">
            <h3 className="font-semibold mb-3">Reach us</h3>
            <ul className="">
              <li>flamezevents@gmail.com</li>
              <li className="pt-2">071 013 3491 | 077 459 8115 <br/> 076 123 6357</li>
              <li className="pt-2">Pepiliyana Road, Boralesgamuwa.</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs pb-4">
          © 2024 Flamez Events. All rights reserved
        </div>
      </div>
  );
}
