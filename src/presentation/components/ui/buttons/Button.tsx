import clsx from 'clsx'
import React, { JSX } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element[]|string,
    color?: 'blue'|'green'|'yellow'|'red'
}

export const Button = ({ children, color = 'blue' , ...props }: Props) => {
    return (
        <button
            className={`transition-all text-2xl flex w-full justify-center rounded-md bg-magic-secondary px-4 py-2 text-white shadow-sm hover:bg-blue-300 bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${props.className}`}
            {...props}   >
            { children }
        </button>
    )
}
