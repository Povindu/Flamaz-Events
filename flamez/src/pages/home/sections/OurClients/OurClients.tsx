import React from 'react'
import Clients from "../../../../assets/SampleClients.png"
export default function OurClients() {
  return (
    <div className="h-fit w-full pt-10 text-center">
      <h1 className="text-4xl text-center font-bold mb-5">
        Our <span className="text-amber-500">Clients</span>
      </h1>
      <img src={Clients} alt="clients" className="w-80 md:w-full m-auto"/>
    </div>
  )
}
