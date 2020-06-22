import React from 'react'
import List  from './List'
import AddList from './AddList'
import { useSelector } from 'react-redux'


function Content() {
    const Lists = useSelector(store => store.Lists.lists)
    return (
        <main className="bg-blue-300 h-full w-100 p-8 flex space-x-8 ">
          {
            Lists ?
            Lists.map((list) => (
                <List key={list.title} title={list.title}/>
            ))
            : null
          }

            <AddList />
        </main>
    )
}

export default Content
