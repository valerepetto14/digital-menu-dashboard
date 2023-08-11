import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendar2Line,
  RiMessage2Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1 p-8">
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu logo</h1>
        </div>
        {/* MENU */}
        <div className="h-[800px] flex flex-col justify-between">
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
          <div className="flex">
            <a
              href="#"
              className="flex items-center gap-4 hover:bg-purple-700 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
            >
              <RiLogoutBoxRLine className="mr-4" />
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Hello, world!</h1>
          <p className="text-xl">This is a React app.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
