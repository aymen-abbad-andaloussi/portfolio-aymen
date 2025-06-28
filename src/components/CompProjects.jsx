import { Link } from "react-router-dom";
import { projet1, projet10, projet11, projet12, projet2, projet3, projet4, projet5, projet6, projet7, projet8, projet9 } from "../assets/const/Images";

export default function CompProjects() {
  return (
    <div className="flex flex-col items-center w-[100%] pt-40 mb-30 gap-15 ">
      <h1 className="text-white/90 text-6xl font-semibold ">My Projets</h1>
      <div className="w-[80vw] border border-white/30 text-white/90 p-20 flex justify-center flex-wrap gap-10 rounded-[50px] ">
        <Link to="https://aymen-abbad-andaloussi.github.io/aymen_andaloussi_finalproject_dom/">
            <img src={projet1} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Yummy</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/aymen-abbad-andaloussi/">
            <img src={projet2} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Delicious</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/bootstrap-simple/">
            <img src={projet3} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Bootstrap Simple</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/aymen-rania-array/">
            <img src={projet4} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Array</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/rania-aymen-boob/">
            <img src={projet5} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Doob</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/penguin-fashion-main/">
            <img src={projet6} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site penguin fashion main</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/exercice-page-bootstrap/">
            <img src={projet7} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site John Doe</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/chipewa/">
            <img src={projet8} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Chippewa</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/ex/">
            <img src={projet9} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Save Turk</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/p-2-ex-7-DOM-html-style-liste-todo3/">
            <img src={projet10} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site To Do Liste</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/p-2-ex-12-DOM-calculatrice/">
            <img src={projet11} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Calculator</h1>
        </Link>

        <Link to="https://aymen-abbad-andaloussi.github.io/feu-rouge/">
            <img src={projet12} alt="image website " className="w-[20vw] rounded-2xl " />
            <h1 className="text-center text-xl py-3 font-semibold ">Web Site Green Light Red Light</h1>
        </Link>

      </div>
    </div>
  )
}