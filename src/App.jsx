import { RiDashboardLine } from "react-icons/ri";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1 p-8">
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu logo</h1>
        </div>
        {/* MENU */}
        <nav>
          <ul>
            <li>
              <a href="#" className="flex items-center p-8">
                <RiDashboardLine className="mr-4" />
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
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
