import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
    <div className="bg-primary"> <Navbar/></div>
    <div className="relative flex flex-col items-center justify-center mt-auto mb-auto overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl  font-bold text-center text-gray-700">Contact us</h1>
        <form className="mt-6">
        <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="fullname"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-800"
            >
              Message
            </label>
            <textarea
             
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          
          
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-Secondary focus:outline-none">
              Send
            </button>
          </div>
        </form>


      </div>
    </div>
    <Footer/>
    </div>
  );
}