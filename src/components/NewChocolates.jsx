import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NewChocolates = () => {
  return (
    <div className="container m-4 p-4">
      <h1 className="text-4xl font-bold bg-amber-950 text-white p-2 w-1/2 mx-auto rounded-lg text-center">
        Chocolate Management System
      </h1>
      <div className="px-40 mt-8">
        <button className="btn btn-outline capitalize">
          <FaLongArrowAltLeft className="me-2"></FaLongArrowAltLeft> All
          Chocolates{" "}
        </button>
        <div className="bg-orange-50 p-10 m-5 rounded-lg">
          <h1 className="text-black text-2xl text-center font-semibold">
            New Chocolates
          </h1>
          <p className="text-black text-center">
            Use the below form to create a new product
          </p>
          <form>
            <div className="my-4">
              <label
                htmlFor="name"
                className="text-black text-xl m-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Hot Pink Chocolate"
                className="bg-white rounded-lg m-1 w-full p-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="name"
                className="text-black text-xl m-1"
              >
                Country
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter Country Name"
                className="bg-white rounded-lg m-1 w-full p-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="name"
                className="text-black text-xl m-1"
              >
                Category
              </label>
              {/* <input
                type="text"
                name="name"
                id=""
                placeholder="Enter Country Name"
                className="bg-white rounded-lg m-1 w-full p-2"
              /> */}
              <div className="m-2">
                <select className="select w-full bg-white">
                  <option
                    disabled
                    selected
                  >
                    Premium
                  </option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                </select>
              </div>
            </div>
            <button className="btn bg-amber-700 w-full hover:btn-primary my-4 text-white">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewChocolates;
