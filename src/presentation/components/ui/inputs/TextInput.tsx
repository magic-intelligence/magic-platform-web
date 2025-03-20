import clsx from "clsx"

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    type?: 'text'|'password'|'email'|'tel'|'url'|'search'|'number',
    error?: boolean
}

export const TextInput = ({ type, error = false ,...props }: Props) => {
    return (
        <input
            type = { type }
            className={
                clsx(
                    `block w-full rounded-md bg-white px-6 py-3 text-base text-gray-700 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`,
                    props.className,
                    error && 'outline-red-600 focus:outline-red-600'
                )
            } 
            {...props}
        />
    )
}
