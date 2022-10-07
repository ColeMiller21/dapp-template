import React, { useState } from "react";
import axios from "axios";

const image = () => {
  const getImage = async () => {
    let image = await axios.get("/api/hello");
    console.log(image);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-black border-2 p-6">
        <button className="bg-red-500 p-2" onClick={() => getImage()}>
          Get Image
        </button>
      </div>
    </div>
  );
};

export default image;
