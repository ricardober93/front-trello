import React, {Fragment} from 'react'
import Header from '../components/Header'
import Board from '../components/tableros/Board'



function Tableros() {
    return (
        <Fragment>
            <Header titulo="Tareas Universidad" />
            <Board />
        </Fragment>
    )
}

export default Tableros
