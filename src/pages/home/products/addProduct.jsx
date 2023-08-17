import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

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
        <form action="">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Product name</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Product description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border border-gray-300 p-2 rounded-md"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Product price</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Product category</label>
              <select
                name=""
                id=""
                className="border border-gray-300 p-2 rounded-md"
              >
                <option value="">Select category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Product image</label>
              <input
                type="file"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Product status</label>
              <select
                name=""
                id=""
                className="border border-gray-300 p-2 rounded-md"
              >
                <option value="">Select status</option>
                <option value="">Status 1</option>
                <option value="">Status 2</option>
                <option value="">Status 3</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
