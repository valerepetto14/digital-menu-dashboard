import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { userStore } from "../../store/user";
import ClipLoader from "react-spinners/ClipLoader";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser, setAuth } = userStore();

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signIn({
      email: e.target[0].value,
      password: e.target[1].value,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setAuth(true);
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //login with awesome style with tailwind css
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="uppercase font-bold tracking-[4px] mb-10 text-2xl">
        DIWAY
      </h1>
      <form onSubmit={handleSignIn} className="lg:w-1/6 flex flex-col gap-2">
        <input
          className="w-full border border-gray-300 rounded-md p-4"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full border border-gray-300 rounded-md p-4 mt-4 mb-2"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue-800 text-white rounded-md px-2 py-2"
        >
          {isLoading ? <ClipLoader color="white" size={20} /> : "Sign In"}
        </button>
        <p className="text-red-500 text-sm">{error}</p>
      </form>
    </div>
  );
};

export default SignIn;
