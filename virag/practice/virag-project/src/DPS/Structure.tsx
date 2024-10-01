import React, { useState } from 'react'

interface Props { name: string }

export const Structure: React.FC<Props> = ({ name }) => {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => { setExpanded(!expanded) }
    const timelogs = (<div><h4>Time Logs</h4></div>)
    return (
        <div className='border border-gray-200 rounded-md p-4 hover:bg-neutral-200'>
            <header className='flex justify-between items-center' role="button" onClick={handleClick}>
                <h3 className='text-lg text-gray-800 hover:text-neutral-600'>{name}</h3>
                <button className='text-gray-800 hover:text-gray-500'>Track time</button>
            </header>
            {expanded && timelogs}
        </div>
    )
}