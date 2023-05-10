import "./App.css";
import { GiChocolateBar } from "react-icons/gi";
import ChocolateCard from "./components/ChocolateCard";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container m-4 p-4">
      <h1 className="text-4xl font-bold bg-amber-950 text-white p-2 w-1/2 mx-auto rounded-lg text-center">
        Chocolate Management System
      </h1>
      <div className="px-40 mt-8">
        <Link to={"/newChocolates"}>
          <button className="btn btn-outline capitalize">
            + New Chocolate
            <GiChocolateBar className="text-xl ml-2 text-amber-700"></GiChocolateBar>
          </button>
        </Link>
        <div>
          <div className="bg-orange-200 my-4 p-3 rounded opacity-60 text-black font-semibold flex justify-between">
            <span>Image</span> <span>Name</span> <span>Country/Factory</span>
            <span>Category</span> <span>Action</span>
          </div>
          <div>
            <ChocolateCard></ChocolateCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
