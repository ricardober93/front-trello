import React from 'react'
import List  from './List'


function Content() {
    return (
        <main className="bg-blue-300 h-full w-100 p-8 flex space-x-8 ">
            <List tituloLista="Tareas"/>
            <List tituloLista="Terminadas" />
        </main>
    )
}

export default Content
