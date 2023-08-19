import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const AddProduct = () => {
  return (
    <div className="w-full flex flex-col bg-gray-100 p-4 md:p-12">
      <div className="w-full flex gap-3">
        <Link to="/products">
          <MdOutlineArrowBackIosNew className="text-2xl" />
        </Link>
        <h1 className="text-xl font-semibold mb-6">Add product</h1>
      </div>
      <div>
        <form action="" className="flex flex-col gap-5">
          <div className="relative col-span-full md:col-span-2">
            <input
              type="text"
              className="bg-white py-2 pr-4 pl-8 outline-none rounded-lg w-full"
              placeholder="Product name"
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
