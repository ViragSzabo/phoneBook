import { createProject, loadProject } from './database/project'
import { useState } from 'react'
import { Project, Timelog } from './types/model'
import { Card } from './Card'
import { createTimeLogs, getActiveTimeLogs, hasActiveTimeLogs } from './database/time-logs'

export const Timer = () => {
    const [projects, setProjects] = useState<Project[]>(loadProject)
    const [currentLog, setCurrentLog] = useState<Timelog | null>(null)

    const startTimer = (projectId: string) => {
        if (hasActiveTimeLogs()) { return }
        createTimeLogs(projectId)
        setCurrentLog(getActiveTimeLogs() || null)
    }

    const stopTimer = () => {
        const activeLog = getActiveTimeLogs()
    }

    const content =
        (!projects.length)
            ? <div className='text-sm text-gray-500'>No projects found</div>
            : projects.map(card =>
                <Card
                    id={card.id}
                    name={card.name}
                    onClickStartTimer={startTimer}
                    onClickStopTimer={stopTimer}
                    isActive={currentLog?.projectId === card.id}
                />
            )

    const handleAdd = () => {
        const name = prompt("Project Name")
        if (!name) { return }
        createProject(name)
        setProjects(loadProject)
    }

    return (
        <div className="max-w-lg mx-auto py-12">
            <header><h1 className="text-4xl font-bold text-gray-800">Tracking</h1></header>
            <main className="mt-8">
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl text-gray-70">Projects</h1>
                    <button className="border border-gray-500 rounded-xl py-1 px-2 text-gray-700 hover:bg-gray-200 hover:text-gray-500" onClick={handleAdd}>Add</button>
                </header>
            </main>
            <section className="mt-8">{content}</section>
        </div>
    )
}