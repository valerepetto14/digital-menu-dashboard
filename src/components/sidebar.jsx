import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendar2Line,
  RiMessage2Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

const Sidebar = ({ sideBarIsOpen }) => {
  return (
    <>
      <div
        className={`bg-white z-40 col-span-1 p-8 border-r border-gray-100 fixed lg:static top-0 w-full h-full transition-all ${
          sideBarIsOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">DIWAY</h1>
        </div>
        {/* MENU */}
        <div className="flex flex-col justify-between relative">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-purple-700 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
                >
                  <RiDashboardLine className="mr-4" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-purple-700 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
                >
                  <RiBriefcaseLine className="mr-4" />
                  Jobs
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-purple-700 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
                >
                  <RiCalendar2Line className="mr-4" />
                  Calendar
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-purple-700 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
                >
                  <RiMessage2Line className="mr-4" />
                  Messages
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="absolute bottom-10 flex">
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-purple-700 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
          >
            <RiLogoutBoxRLine className="mr-4" />
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;