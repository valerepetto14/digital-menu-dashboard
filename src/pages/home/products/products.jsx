import { useEffect, useState } from "react";
import { RiSearchLine, RiFilter3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../components/products/card";
import { getProducts } from "../../../api/product";
import { useProductStore } from "../../../store/products";
import { searchedProducts } from "../../../api/product";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const { products, setProducts } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data.products));
  }, []);

  useEffect(() => {
    searchedProducts(searchText, status).then((res) =>
      setProducts(res.data.products)
    );
  }, [searchText, status]);

  const handleSelectedChange = (event) => {
    setStatus(event.target.value);
  };

  console.log(status);
  return (
    <div className="flex flex-col bg-gray-100 p-4 md:p-12">
      <h1 className="text-xl font-semibold mb-6">Products</h1>
      <div className="w-full grid grid-cols-5 gap-2 md:gap-10 mb-8">
        <div className="relative col-span-full md:col-span-2">
          <RiSearchLine className="absolute left-2 top-3" />
          <input
            type="text"
            className="bg-white py-2 pr-4 pl-8 outline-none rounded-lg w-full"
            placeholder="Search"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
        <div className="relative col-span-2 md:col-span-1">
          <RiFilter3Line className="absolute left-2 top-3" />
          <select
            type="text"
            className="bg-white py-2 pr-4 pl-8 outline-none rounded-lg w-full"
            placeholder="Status"
            value={status}
            onChange={handleSelectedChange}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="relative col-span-2 md:col-span-1">
          <RiFilter3Line className="absolute left-2 top-3" />
          <select
            type="text"
            className="bg-white py-2 pr-4 pl-8 outline-none rounded-lg w-full"
            placeholder="Status"
          >
            <option value="1">All</option>
            <option value="2">Active</option>
            <option value="3">Inactive</option>
          </select>
        </div>
        {/* clear filter */}
        <button
          onClick={() => navigate("/products/add")}
          className="col-span-1 flex items-center justify-center bg-blue-800 text-white text-xs lg:text-sm rounded-lg"
        >
          Add product
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-400 mb-5">
          we have found <span className="font-bold text-blue-800">65</span>{" "}
          results
        </p>
        {
          // products
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
