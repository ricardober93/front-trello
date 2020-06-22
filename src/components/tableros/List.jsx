import React, { useState, } from "react";
import Card from "./Card";
import {useDispatch } from 'react-redux'
import {addCardAction, } from '../../redux/TrelloDuck'
import shortid from 'shortid'


export default function List({ title }) {
 
  const dispatch = useDispatch();
  const [Cards, setCard] = useState({
    title: '',
  });
  const [List, setList] = useState([]);
  const [Open, setOpen] = useState(false);


  const createCardHandle = (e) => {
    const title = e.target.value;
    const id = shortid.generate()
    setCard({...Cards,
      id:id,
      title: title
    });
  };
  const addCards = () => {
   setList([...List, Cards])
   dispatch(addCardAction(List))
   setOpen(!Open);
  };


  const DeleteItem = (id) => {
    const arrayFiltrado = List.filter(item => item.id !== id)
    setList(arrayFiltrado)
  }


  return (
    <section className="sm:w-auto  w-min-240 w-max-300 w-25 overflow">
      <div className="max-w-sm rounded bg-gray-200 overflow-hidden shadow-lg p-4">
        <p className="text-sm text-gray-600 flex items-center text-lg font-bold">
          {title}
        </p>
        {

          List?   List.map((item, i) => (<Card key={i} item={item} id={item.id} DeleteItem={DeleteItem} />))  : null
       
        }
        {Open ? (
          <form
            className="max-w-xs bg-white bg-white mt-3 shadow-sm mx-auto"
            onSubmit={(e) => addCards(e)}
          >
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              type="text"
              placeholder="Nombre de la Tarea"
              autoFocus
              onChange={(e) => createCardHandle(e)}
            />
            <button className="bg-green-400 w-full hover:bg-green-600 text-white  py-2 px-2 mt-2 rounded flex items-center justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
              Agregar Tarea
            </button>
          </form>
        ) : (
          <button
            className="bg-gray-200 w-full hover:bg-gray-300 text-gray-500 font-bold py-1 px-4 mt-2 rounded flex items-center justify-around"
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
            Agregar Tarea
          </button>
        )}
      </div>
    </section>
  );
}
