import React from "react";
import TrelloAddForm from "./TrelloAddForm";
import {addListAction } from '../../redux/TrelloDuck'
import {useDispatch, } from 'react-redux'

export default function AddList() {
  const dispatch = useDispatch();
  const [Open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');


  const createListHandle = (e) => {
      setTitle(e.target.value)

  }

  const onSubmitHandle = () => {
        try {
            dispatch(addListAction(title))
            setTitle('')
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
  }


  return (
    <section className="sm:w-auto  w-min-240 w-max-300 w-25">
    <div className="rounded bg-blue-400 shadow-md p-2">
      {Open ? (
      <TrelloAddForm
        onSubmitHandle={onSubmitHandle}
        placeholder='Agregar Lista'
        Handle={createListHandle}
        text='Agregar Lista'
        setOpen={setOpen}
        Open={Open}
        />
      ) : (
        <button
          className="bg-blue-200 w-full hover:bg-blue-300 text-blue-500 font-bold py-1 px-4 mt-2 rounded flex items-center justify-around"
          onClick={() => setOpen(!Open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
          Agregar Lista
        </button>
      )}
    </div></section>
  );
}
