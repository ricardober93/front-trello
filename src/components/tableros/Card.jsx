import React from "react";

export default function Card({ item }) {
  return (
    <div className="w-full max-w-xs pt-1">
      <form className="bg-white  rounded p-2 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="username"
          >
            {item.title}
          </label>
        </div>
      </form>
    </div>
  );
}
