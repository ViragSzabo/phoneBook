import React, { useState } from 'react'

interface Props { 
    id: string,
    name: string,
    onClickStartTimer: (id: string) => void,
    onClickStopTimer: (id: string) => void,
    isActive: boolean
 }

export const Card: React.FC<Props> = ({ id, name, onClickStartTimer, onClickStopTimer, isActive }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => { setExpanded(!expanded) }

    const timelogs = (<div><h4>Time Logs</h4></div>)

    const handleTimerButton: React.MouseEventHandler = (e) => {
        e.stopPropagation()
        if(!isActive) { 
            return onClickStartTimer(id)
        }
        onClickStopTimer(id)
    }

    return (
        <div className='border border-gray-200 rounded-md p-4 hover:bg-neutral-200'>
            <header className='flex justify-between items-center' role="button" onClick={handleClick}>
                <h3 className='text-lg text-gray-800 hover:text-neutral-600'>{name}</h3>
                <button className='text-gray-800 hover:text-gray-500' onClick={handleTimerButton}>{isActive ? "Stop" : "Start"}</button>
            </header>
            {expanded && timelogs}
        </div>
    )
}