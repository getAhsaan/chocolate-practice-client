import "./App.css";
import { GiChocolateBar, GiPencil, GiCrossMark } from "react-icons/gi";

function App() {
  return (
    <div className="container m-4 p-4">
      <h1 className="text-4xl font-bold bg-amber-950 text-white p-2 w-1/2 mx-auto rounded-lg text-center">
        Chocolate Management System
      </h1>
      <div className="px-40 mt-8">
        <button className="btn btn-outline capitalize">
          + New Chocolate{" "}
          <GiChocolateBar className="text-xl ml-2 text-amber-700"></GiChocolateBar>
        </button>
        <div>
          <div className="bg-orange-200 my-4 p-3 rounded opacity-60 text-black font-semibold flex justify-between">
            <span>Image</span> <span>Name</span> <span>Country/Factory</span>{" "}
            <span>Category</span> <span>Action</span>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
