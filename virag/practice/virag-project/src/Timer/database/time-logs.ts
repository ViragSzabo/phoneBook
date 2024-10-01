import { Timelog } from '../types/model'

export const getTimeLogs = () => {
    return JSON.parse(localStorage.getItem('projects') || '[]') as Timelog[]
}

export const getActiveTimeLogs = () => {
    return getTimeLogs().find(t => !t.ended_at)
}

export const getInactiveTimeLogs = () => {
    return getTimeLogs().find(t => t.ended_at)
}

export const hasActiveTimeLogs = () => {
    return Boolean(getActiveTimeLogs)
}

export const loadTimeLogs = () => {
    return getTimeLogs()
}

export const saveTimeLogs = () => {
    localStorage.setItem('timeLog', JSON.stringify(getTimeLogs()))
}

export const updateTimeLog = (id: string, updated: Timelog) => {
    getTimeLogs().map(log => {
        if (log.id !== id) {
            return updated
        }
    })
}

export const createTimeLogs = (projectId: string) => {
    getTimeLogs().push({
        id: String(Date.now()),
        projectId: projectId,
        started_at: String(Date.now()),
        ended_at: null
    })
    saveTimeLogs()
}