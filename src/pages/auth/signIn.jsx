import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/");
  };
  //login with awesome style with tailwind css
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="uppercase font-bold tracking-[4px] mb-10">DIWAY</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 rounded-md px-2 py-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md px-2 py-1"
        />
        <button
          onClick={handleSignIn}
          className="bg-blue-500 text-white rounded-md px-2 py-1"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
