import { FaArrowRightToBracket } from "react-icons/fa6";
import { imageMe } from "../assets/const/Images";
import { Link } from "react-router-dom";

export default function CompHomeInfos() {
  return (
    <div className=" w-[100vw] h-[100%] flex items-center justify-between px-20 pt-35">
      <div className="zedIndex h-[70%] w-[60%] text-white/90 flex flex-col justify-evenly " data-aos="zoom-in-right" >
        <h3 className="text-3xl font-semibold italic bg-white/10 w-fit px-20 py-5 ">
          Welcome to my Portfolio
        </h3>
        <h1 className="text-6xl font-bold flex flex-col ">
          <span className="">Hi! I'm Aymen Andaloussi</span>
          <span className="devText ">Developer Fullstack...</span>
        </h1>
        <p className="text-2xl ">
          I am a passionate Fullstack Developer with a strong background in
          building modern web applications. I specialize in creating responsive,
          user-friendly interfaces and robust backend systems. I love turning
          ideas into reality through clean, efficient code and continuous
          learning.
        </p>
        <div className="w-full flex justify-center items-center ">
          <Link to={"/About"}>
            <button className=" flex items-center gap-6 justify-center text-4xl font-medium italic cursor-pointer w-fit px-10 py-3 rounded-full bg-white/10 hover:scale-110 transition ">
              <span className="">Learn More</span>
              <FaArrowRightToBracket />
            </button>
          </Link>
        </div>
      </div>
      <div className="divImageMe " >
        <img
          src={imageMe}
          alt="image me"
          className="w-[100%] h-[100%] imageMe"
          data-aos="zoom-in-left"
        />
      </div>
    </div>
  );
}
