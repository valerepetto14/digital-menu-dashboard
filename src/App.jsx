import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Content from "./components/content";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
        <Content />
      </div>
    </div>
  );
}

export default App;
