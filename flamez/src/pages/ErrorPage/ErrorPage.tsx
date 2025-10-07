import { Link } from "react-router-dom";
import FlamezLogo from "../../assets/flamezLogo.png";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="pb-10">
        <Link to="/">
          <img src={FlamezLogo} alt="Flamez Logo" className="w-60" />
        </Link>
      </div>
      <div
        className="flex flex-col justify-center items-center border border-slate-400 py-8 px-16
       rounded-xl"
      >
        <p className="text-center text-3xl font-bold uppercase">Error 404</p>
        <div className="flex justify-center items-center">
          <h1 className="text-center text-lg m-8 w-80 break-words">
            The page you are looking for might be removed or is temporarily
            unavailable
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/">
            <p className="text-center text-lg mt-4 border border-orange-400 hover:bg-orange-100 font-semibold rounded-2xl py-2 px-5">
              Go to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
