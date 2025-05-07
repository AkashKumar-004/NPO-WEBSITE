import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { hideWelcome } from "../Redux/WelcomeSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const showWelcome = useSelector((state) => state.welcome.showWelcome);

  const handleClose = () => {
    dispatch(hideWelcome());
  };

  if (!showWelcome) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-10 rounded-2xl max-w-lg w-[90%] shadow-2xl relative border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-extrabold mb-4 text-blue-700 dark:text-blue-400 text-center">
          🎉 Welcome to Website!
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-6 text-center">
          For full access, please use the following credentials:
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl mb-6 shadow-inner">
          <p className="mb-2 text-sm">
            <span className="font-semibold">Username:</span>{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">admin@example.com</code>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Password:</span>{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Admin1234567</code>
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-200"
          >
            Got it, Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
