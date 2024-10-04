import React from "react";
import api from "../../../../services/AuthService";
import { useEffect, useState } from "react";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateService() {
  const navigate = useNavigate();

  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<any>([]);
  const handleSelectFile = (e: any) => setFile(e.target.files[0]);
  const [author, setAuthor] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");

  const UploadComp = () => {
    const handleUpload = async () => {
      try {
        setLoading(true);
        const data = new FormData();
        if (!file) throw new Error("no file selected");
        data.append("my_file", file);
        const res2 = await api.post("upload", data);
        setRes((res: any[]) => [...res, res2.data]);
        setFile(null);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="font-poppins mt-3">
        <div className=" w-full flex flex-row  my-3 items-center">
          {res.length == 0 ? (
            <label
              htmlFor="file"
              className={`${
                file
                  ? "bg-white border border-black text-black "
                  : "bg-gray-900 text-white"
              } align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
            >
              {file ? "Change the image" : "Select a image"}
            </label>
          ) : (
            <></>
          )}

          <input
            id="file"
            type="file"
            onChange={handleSelectFile}
            multiple={false}
            className="hidden"
          />

          {file && (
            <>
              <p className="mx-3 text-xs max-w-72 overflow-hidden break-words">
                <span className="font-semibold">Uploaded Image name:</span>
                {file.name}
              </p>
            </>
          )}
        </div>
        {file && (
          <Button variant="filled" onClick={handleUpload} className="">
            {loading ? "Uploading..." : "Upload to cloudinary"}
          </Button>
        )}
        {res.length > 0 && (
          <div className="mt-4">
            {/* <p className="text-base">Uploaded files</p> */}
            <Typography variant="h6" color="blue-gray" className="">
              Uploaded files
            </Typography>
            <div className="grid grid-cols-3 gap-1 mt-2">
              {res.map((r: any) => (
                <div key={r.public_id} className=" w-28 h-28 ">
                  <img
                    src={r.secure_url}
                    alt=""
                    className="w-28 h-28 rounded-md"
                  />
                  <button
                    className="text-sm text-red-500"
                    onClick={() => setRes([])}
                  >
                    {" "}
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const submitTestimonial = async () => {
    if (!author) {
      return toast.warn("Please add a author");
    }
    console.log("author", author);
    console.log("position", position);
    console.log("description", description);
    console.log("res", res);

    const link = res[0].secure_url;

    api
      .post("testimonials/create", {
        name: author,
        position,
        description,
        imageLink: link,
      })
      .then((res) => {
        if (res.data.error) {
          return toast.error(res.data.error);
        }
        toast.success("Testimonial added successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occured");
      });
    //
  };

  return (
    <>
      <div className=" w-full px-24">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Typography
                variant="h3"
                className="text-lg font-semibold leading-10 text-gray-900"
              >
                Add Testimonial
              </Typography>

              <div>
                <Card color="transparent" shadow={false}>
                  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-5">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Author (Person or the company)
                        <div className="text-red-500 text-xs font-normal inline ml-1">
                          * Required
                        </div>
                      </Typography>
                      <Input
                        id="author"
                        size="lg"
                        placeholder="Ex: Light Equipment"
                        className="!border !border-gray-400 outline-none focus:!border-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin={undefined}
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                      />

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Author's Position
                      </Typography>
                      <Input
                        id="Position"
                        size="lg"
                        placeholder="We offer a versatile range of lighting solutions suitable for any events."
                        className="!border !border-gray-400 outline-none focus:!border-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin={undefined}
                        onChange={(e) => setPosition(e.target.value)}
                        value={position}
                      />

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Testimonial Description
                        <div className="text-red-500 text-xs font-normal inline ml-1">
                          {" "}
                          *Required
                        </div>
                      </Typography>
                      <Input
                        id="description"
                        size="lg"
                        placeholder="We offer a versatile range of lighting solutions suitable for any events."
                        className="!border !border-gray-400 outline-none focus:!border-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        crossOrigin={undefined}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-8"
                      >
                        Image
                      </Typography>

                      <UploadComp />
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            onClick={() => submitTestimonial()}
            className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
          >
            Add Testimonial
          </button>
          <Link to="/dashboard/testimonials">
            <button
              type="button"
              data-autofocus
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
