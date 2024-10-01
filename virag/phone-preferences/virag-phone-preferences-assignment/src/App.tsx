import { SearchBar } from "./searching/Searchbar"
import Header from "./menu/Header"

export default function App() {  
  return (
    <div className="h-full w-full p-32" >
      <Header />
      <SearchBar />
    </div>
  )
}