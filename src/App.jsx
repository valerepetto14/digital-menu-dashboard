import { useState } from "react";
import Sidebar from "./components/sidebar";
import { 
  RiMenu3Fill,
   RiCloseLine, 
   RiNotification3Line,
   RiSearchLine,
   RiArrowDownSLine,
   RiCheckboxBlankCircleFill
  } from "react-icons/ri";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const searchIcon = RiSearchLine

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
      <Sidebar sideBarIsOpen={sidebarOpen} />
      <button
        onClick={toggleSidebar}
        className="{side}z-50 absolute bottom-5 right-5 p-3 bg-purple-600 rounded-full text-white text-2xl lg:hidden block"
      >
        {sidebarOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Header */}
      <div className="col-span-5">
        <header className="flex items-center justify-between p-4 w-full">
          <form className="w-[30%]">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-3"/>
              <input type="text" className="bg-gray-100 py-2 pr-4 pl-8 outline-none rounded-lg w-full" placeholder="Search"/>
            </div>
          </form>
          <nav className="w-[70%] flex justify-end">
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="relative">
                  <RiNotification3Line/>
                  <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500"/>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Pepe Rodriguez
                  <RiArrowDownSLine/>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
