import React from "react";


export default function Card({ item, DeleteItem, id }) {
  
  const deleteCard = (id, e) => {
    e.preventDefault();
    DeleteItem(id);
  };
  
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
        <button
            className="bg-red-400 w-12 hover:bg-red-600  py-1 px-1 mt-2 rounded flex items-center justify-around"
            onClick={(e) => deleteCard(id,e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>
      </form>
    </div>
  );
}
