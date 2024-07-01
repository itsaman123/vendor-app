import React from 'react'

const Button = (props) => {
    return (
        <>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded border-2 text-white no-underline">{props.name}</a>
            </div>
        </>
    )
}

export default Button