import { Project } from '../types/model'

export const getProject = () => {
    return JSON.parse(localStorage.getItem('projects') || '[]') as Project[]
}

export const createProject = (name: string) => {
    const projects = getProject()
    projects.push({ id: String(Date.now()), name })
    localStorage.setItem('projects', JSON.stringify(projects))
}

export const loadProject = () => {
    return getProject()
}