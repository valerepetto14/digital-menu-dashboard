import { useState } from "react";
import Sidebar from "./components/sidebar";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
      <Sidebar sideBarIsOpen={sidebarOpen} />
      <button
        onClick={toggleSidebar}
        className="z-50 absolute bottom-5 right-5 p-3 bg-purple-600 rounded-full text-white text-2xl lg:hidden block"
      >
        {sidebarOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      <h1>hola</h1>
    </div>
  );
}

export default App;
