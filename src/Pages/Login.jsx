import { use } from "react";
import { FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../ContextAPI/AuthContext";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
const LoginPage = () => {
  const { SignInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    const loginData = Object.fromEntries(formdata.entries());
    console.log(loginData);

    SignInUser(loginData.email, loginData.password)
      .then((result) => {
        const user= result.user;
        if(!user.emailVerified){
            toast.error('Please Verify your account before login')
            return;
        }
        
        toast.success("Login Successful");
        form.reset();
        navigate('/')
      })
      .catch(() => {
        toast.error("Wrong Email or Password");
      });
    // navigate("/");
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Sign In Successful");
      })
      .catch((error) => {
        console.error("Error during Google Sign In:", error);
        toast.error("Google Sign In Failed");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#A4CCD9] to-[#C4E1E6] p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-base-100 rounded-xl shadow-lg p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold mt-4">Hello Again!</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back. Please log in to your account.
          </p>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaEnvelope className="absolute left-4 top-4.5 text-gray-400" />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            className="w-full border border-gray-300 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaLock className="absolute left-4 top-4.5 text-gray-400" />
        </div>

        {/* Remember Me */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>Remember Me</span>
          </label>
          <button type="button" className="text-blue-500 hover:underline">
            Recovery Password
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
        >
          Login
        </button>

        {/* Or Divider */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <hr className="flex-grow border-gray-300" />
          or
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-in */}
        <Link
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border rounded-full py-3 hover:shadow-md transition"
        >
          <FcGoogle size={20} className="mr-2 " />
          Sign in with Google
        </Link>

        {/* Sign Up */}
        <p className="text-left text-sm text-gray-500">
          Don’t have an account?{" "} <br /><br />
          Create your Roomies account by <Link className="text-blue-400 underline">Listing Your Available room</Link> or creating <Link className="text-blue-400 underline">a room wanted profile</Link> .
        </p>
        <ToastContainer />
      </form>
    </div>
  );
};
export default LoginPage;
