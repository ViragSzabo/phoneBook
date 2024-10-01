import { Structure } from "./Structure"

export const Dashboard = () => {
    return (
        <div className="max-w-lg mx-auto py-12">
            <header><h1 className="text-4xl font-bold text-gray-800">Dead Poets Society</h1></header>
            <main className="mt-8">
                <header className="flex justify-between items-center">
                    <h1 className="text-3xl text-gray-70 p-20">Characters</h1>
                    <button className="border border-gray-500 rounded-xl py-1 px-2 text-gray-700 hover:bg-gray-200 hover:text-gray-500">Add</button>
                </header>
            </main>
            <section className="mt-8">
                <Structure name="John Keating" />
                <Structure name="Todd Anderson" />
                <Structure name="Neil Perry" />
                <Structure name="Charlie Dalton" />
                <Structure name="Knox Overstreet" />
                <Structure name="Richard Cameron" />
            </section>
        </div>
    )
}