import React from "react";

export default function Nabvar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Trello Clon
        </span>
      </div>
      {/* <div className="w-full block flex items-end lg:w-auto">
        <div>
          <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </a>
          <a className="bg-blue-200 text-sm px-4 py-2 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </a>
        </div>
      </div> */}
    </nav>
  );
}
