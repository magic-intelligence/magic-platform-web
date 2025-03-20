'use client'
import clsx from 'clsx'
import React from 'react'

type Option = {
    value : string,
    text: string
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement>{
    error?: boolean,
    items: Option[]
}

export const SelectMenu = ({ error = false, items ,...props }: Props) => {
    return (
        <select className={
                        clsx(
                            `block w-full rounded-md bg-white px-6 py-3 text-base text-gray-700 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`,
                            props.className,
                            error && 'outline-red-600 focus:outline-red-600'
                        )
                    }>
            <option value="value0" selected>Selecciona una rol</option>
            { items?.map(option => (
                <option key={ option.value } value={option.value}> { option.text } </option>
            ))}
        </select>
    )
}
