import Popular from "./Popular";
import Veggiterian from "./Veggiterian";
import Dessert from "./Dessert";

const Main = () => {
  return (
    <div>
        <section className="pb-24 bg-zinc-600">
          <Popular />
        </section>

        <section className="pb-24 bg-slate-800">
          <Veggiterian />
        </section>

        <section className="pb-24 bg-zinc-600">
          <Dessert />
        </section>
    </div>
  )
}

export default Main