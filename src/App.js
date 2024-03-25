import Country from "./Components/Country"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Pages from "./Pages/Pages"

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <section className="fixed z-[1000] w-full  bg-zinc-600">
          <NavBar />
        </section>

        <section className="pt-[70px] pb-8 bg-slate-800">
          <Home />
        </section>

        <section className="bg-zinc-600">
          <Country />
        </section>

        <section>
          <Pages />
        </section>
    </main>
    </BrowserRouter>
    
  )
}
