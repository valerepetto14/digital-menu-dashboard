import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Products from "./products/products";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { userStore } from "../../store/user";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import AddProduct from "./products/addProduct";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setAuth, setUser, user } = userStore();
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const res = await axios.get("http://localhost:3000/auth/checkAuth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuth(true);
        setUser(res.data.user);
      } catch (error) {
        setAuth(false);
        setUser(null);
        localStorage.removeItem("token");
        navigate("/signin");
      }
    };
    check();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!user) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <ClipLoader color="#3B82F6" size={100} />
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6 h-screen overflow-hidden">
      <Sidebar sideBarIsOpen={sidebarOpen} />
      <button
        onClick={toggleSidebar}
        className="z-50 absolute bottom-5 right-5 p-3 bg-blue-800 rounded-full text-white text-2xl lg:hidden block"
      >
        {sidebarOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      <div className="col-span-5 h-full overflow-y-scroll">
        <Header />
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
