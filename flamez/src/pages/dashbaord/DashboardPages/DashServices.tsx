import api from "../../../services/AuthService";
import { useEffect, useState } from "react";
import { Button, Card, Input, Typography } from "@material-tailwind/react";

import DefaultTable from "./Comp/Table";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Services() {
  const [services, setServices] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [files, setFile] = useState([]);
  const [title, setTitle] = useState<any>([]);

  function handleChange(event: any) {
    setFile(event.target.files);
    for (let i = 0; i < event.target.files.length; i++) {
      console.log(event.target.files[i].name);
      setTitle([...title, event.target.files[i].name]);
      console.log(event.target.files[i]);
    }
  }
  console.log(title);

  function Modal() {
    return (
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
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
                    <DialogTitle
                      as="h3"
                      className="text-lg font-semibold leading-10 text-gray-900"
                    >
                      Edit Service
                    </DialogTitle>

                    <div>
                      <Card color="transparent" shadow={false}>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                          <div className="mb-1 flex flex-col gap-5">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="-mb-3"
                            >
                              Title
                            </Typography>
                            <Input
                              size="lg"
                              placeholder="Ex: Light Equipment"
                              className="!border !border-gray-400 outline-none focus:!border-gray-900"
                              labelProps={{
                                className:
                                  "before:content-none after:content-none",
                              }}
                              crossOrigin={undefined}
                            />

                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="-mb-3"
                            >
                              Description
                            </Typography>
                            <Input
                              size="lg"
                              placeholder="We offer a versatile range of lighting solutions suitable for any events."
                              className="!border !border-gray-400 outline-none focus:!border-gray-900"
                              labelProps={{
                                className:
                                  "before:content-none after:content-none",
                              }}
                              crossOrigin={undefined}
                            />
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="-mb-3"
                            >
                              Description
                            </Typography>
                            {/* <div className="flex items-center justify-center w-full">
                              <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    className="w-10 h-10 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                  </svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  className="hidden"
                                  onChange={handleChange}
                                  multiple
                                />
                              </label>
                            </div> */}

                            <div>
                              <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="multiple_files"
                              >
                                Upload Image Files
                              </label>
                              <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="multiple_files"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                multiple
                                placeholder="dfwd"
                              />
                            </div>
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
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
                >
                  Add Service
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  }

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
    <>
      <div className="w-full">
        <p className="text-lg font-poppins p-4 uppercase">
          Add or Edit Services
        </p>
        <DefaultTable data={services} />
        <div className="p-8">
          <Button
            variant="filled"
            className="float float-end"
            onClick={() => setOpen(!open)}
          >
            Add Service
          </Button>
        </div>
      </div>
      <Modal />
    </>
  );
}
