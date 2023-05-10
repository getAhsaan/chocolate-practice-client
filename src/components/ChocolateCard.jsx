import React from "react";
import { GiPencil, GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateCard = ({ chocolate, chocolates, setChocolates }) => {
  const { _id, name, country, photo, category } = chocolate;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
            const remaining = chocolates.filter((choco) => choco._id !== _id);
            setChocolates(remaining);
          });
        // console.log("delete confirmed");
      }
    });
  };
  return (
    <div className="flex justify-between bg-white p-4 rounded text-black my-2">
      <span>
        <img
          src={photo}
          alt="image1"
          className="w-12 h-12"
        />
      </span>
      <span>{name}</span>
      <span>{country}</span>
      <span>{category}</span>
      <span className="flex">
        <Link to={`/updateChocolates/${_id}`}>
          <button>
            <GiPencil className="bg-orange-200 hover:bg-orange-400 opacity-60 text-4xl p-2 m-1 rounded"></GiPencil>
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <GiCrossMark className="bg-orange-200 hover:bg-orange-400 opacity-60 text-4xl p-2 m-1 rounded"></GiCrossMark>
        </button>
      </span>
    </div>
  );
};

export default ChocolateCard;
