import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="bg-orange-50 p-24 rounded-xl m-36">
        <p className="text-center text-6xl text-orange-500">Error 404</p>
        <div className="flex justify-center items-center">
          <h1 className="text-center text-2xl m-8 w-90">
            The page you are looking for might be removed or is temporarily
            unavailable
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/">
            <p className="text-center text-2xl m-4 bg-orange-400 rounded-2xl p-2 w-48">
              Go to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
