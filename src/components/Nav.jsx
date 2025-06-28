import { Link } from "react-router-dom";
import { logoImage } from "../assets/const/Images";

export default function Nav() {
  return (
    <nav className="h-[10vh] flex items-center justify-center w-[100vw] navBackground fixed top-0 left-0 ">
      <div className="flex items-center w-[90vw] justify-between ">
        <div className="w-fit h-fit flex items-center ">
          <img src={logoImage} alt="logo image" className="w-55 " />
        </div>
        <div className="flex items-center gap-15 ">
          <Link to="/" className="hover:scale-x-125 text-2xl font-semibold italic text-white hover:bg-white/10 px-5 py-1.5 rounded-full transition">
            <span>Home</span>
          </Link>
          <Link to="/About" className="hover:scale-x-125 text-2xl font-semibold italic text-white hover:bg-white/10 px-5 py-1.5 rounded-full transition">
            <span>About</span>
          </Link>
          <Link to="/Projets" className="hover:scale-x-125 text-2xl font-semibold italic text-white hover:bg-white/10 px-5 py-1.5 rounded-full transition">
            <span>Projets</span>
          </Link>
          <Link to="/Contact" className="hover:scale-x-125 text-2xl font-semibold italic text-white hover:bg-white/10 px-5 py-1.5 rounded-full transition">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
