import React from 'react'

export default function TrelloAddForm({onSubmitHandle,placeholder, Handle, text, setOpen, Open }) {
  const onSubmit = (e) =>{
    e.preventDefault();
    onSubmitHandle()
  }
    return (
        <form onSubmit={e => onSubmit(e)}
        className="max-w-xs  mt-3 shadow-sm mx-auto"
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="title"
          type="text"
          placeholder={placeholder}
          autoFocus
          onChange={Handle}
        />
        <div className="flex flex-row justify-around">
        <button className="bg-green-400 w-auto hover:bg-green-600 text-white  py-2 px-2 mt-2 rounded flex items-center justify-around">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
          {text}
        </button>
        <button className="bg-red-400 w-12 hover:bg-red-600 text-white  py-2 px-2 mt-2 rounded flex items-center justify-around" 
        onClick={() => setOpen(!Open)}>
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
        </div>
      </form>
    )
}
