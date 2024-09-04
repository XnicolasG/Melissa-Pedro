import React from 'react'

export const ChevronRigth = (props) => {
    return (
        <svg {...props} className={`w-6 h-6 text-gray-800 dark:text-white ${props.className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path {...props} stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
        </svg>

    )
}
