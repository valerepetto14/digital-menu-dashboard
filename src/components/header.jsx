import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import { userStore } from "../store/user";

const Header = () => {
  const { user } = userStore();

  return (
    <div className="col-span-5">
      <header className="flex flex-col md:flex-row items-center justify-end p-4 w-full gap-4">
        <nav className="w-full md:w-[70%] flex md:justify-end justify-center">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="relative">
                <RiNotification3Line />
                <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-blue-800" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                {user.firstName} {user.lastName}
                <RiArrowDownSLine />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
