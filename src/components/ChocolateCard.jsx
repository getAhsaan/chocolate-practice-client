import React from "react";
import { GiPencil, GiCrossMark } from "react-icons/gi";

const ChocolateCard = () => {
  return (
    <div className="flex justify-between bg-white p-4 rounded text-black my-2">
      <span>
        <img
          src=""
          alt="image1"
        />
      </span>
      <span>Hot Pink Chocolate</span>
      <span>Australia</span>
      <span>Premium</span>
      <span className="flex">
        <button>
          <GiPencil className="bg-orange-200 hover:bg-orange-400 opacity-60 text-4xl p-2 m-1 rounded"></GiPencil>
        </button>
        <button>
          <GiCrossMark className="bg-orange-200 hover:bg-orange-400 opacity-60 text-4xl p-2 m-1 rounded"></GiCrossMark>
        </button>
      </span>
    </div>
  );
};

export default ChocolateCard;
