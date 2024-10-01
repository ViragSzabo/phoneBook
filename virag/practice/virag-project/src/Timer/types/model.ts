export interface Project {
    id: string,
    name: string
}

export interface Timelog {
    id: string,
    projectId: string,
    started_at: string,
    ended_at: string | null
}