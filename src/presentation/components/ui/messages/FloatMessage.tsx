'use client'
import clsx from "clsx"
import { useState } from "react"
import { IoClose } from "react-icons/io5"

interface Props{
    summary: string,
    description: string,
    type?: 'blue'|'green'|'yellow'|'red'
}

export const FloatMessage = ({ summary, description, type = 'blue' }:Props) => {
    const [isVisible, setIsVisible] = useState<boolean>( true );

    const toggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            {isVisible && (
                <div className={ clsx( `fixed right-4 top-4 bg-${ type }-500 text-white p-3 rounded-md transition-all` ) }>
                    <div className="flex justify-between items-center gap-8 font-bold">
                        <span>{ summary }</span>
                        <button onClick={() => toggle()}>
                            <IoClose className="text-[20px]" />
                        </button>
                    </div>
                    <div>
                        <span>{ description }</span>
                    </div>
                </div>
            )}
        </>
    )
}
