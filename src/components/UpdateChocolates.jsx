import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolates = () => {
  const chocolate = useLoaderData();
  const { _id, name, country, photo, category } = chocolate;

  const handleUpdateChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const photo = form.photo.value;
    // const category = form.select.value;
    const updateChocolate = { name, country, photo, category };
    console.log(updateChocolate);

    fetch(`http://localhost:4000/chocolates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Chocolate Update Successfully!",
            "You clicked the button!",
            "success"
          );
        }
      });
  };

  return (
    <div className="container m-4 p-4">
      <h1 className="text-4xl font-bold bg-amber-950 text-white p-2 w-1/2 mx-auto rounded-lg text-center">
        Chocolate Management System
      </h1>
      <div className="px-40 mt-8">
        <Link to={"/"}>
          <button className="btn btn-outline capitalize">
            <FaLongArrowAltLeft className="me-2"></FaLongArrowAltLeft> All
            Chocolates
          </button>
        </Link>
        <div className="bg-orange-50 p-10 m-5 rounded-lg">
          <h1 className="text-black text-2xl text-center font-semibold">
            Update Chocolates
          </h1>
          <p className="text-black text-center">
            Use the below form to update a new product
          </p>
          <form onSubmit={handleUpdateChocolate}>
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
                defaultValue={name}
                id=""
                placeholder="Hot Pink Chocolate"
                className="bg-white rounded-lg m-1 w-full p-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="country"
                className="text-black text-xl m-1"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                defaultValue={country}
                id=""
                placeholder="Enter Country Name"
                className="bg-white rounded-lg m-1 w-full p-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="photo"
                className="text-black text-xl m-1"
              >
                Photo
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                id=""
                placeholder="Enter Photo URL"
                className="bg-white rounded-lg m-1 w-full p-2"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="category"
                className="text-black text-xl m-1"
              >
                Category
              </label>
              <div className="m-2">
                <select
                  className="select w-full bg-white"
                  id=""
                  defaultValue={category}
                >
                  <option>Premium</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              value="Update"
              className="btn bg-amber-700 w-full hover:btn-primary my-4 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateChocolates;
