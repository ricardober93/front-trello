import React from 'react'
import Nabvar from './Nabvar'


function Layout(props) {
    return (
        <main className="h-full container-fluid">
            <Nabvar />
           {props.children}
        </main>
    )
}

export default Layout
