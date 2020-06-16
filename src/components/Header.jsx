import React from 'react'

export default function Header({titulo}) {
    return (
        <header className="flex justify-center bg-blue-400 p-3" >
            <h4 className="text-lg font-sans antialiased font-semibold text-white uppercase "> {titulo} </h4>
        </header>
    )
}
