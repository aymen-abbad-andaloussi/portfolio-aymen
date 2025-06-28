import { BsBootstrapFill } from "react-icons/bs";
import {
  FaGitAlt,
  FaGithubSquare,
  FaJsSquare,
  FaLaravel,
} from "react-icons/fa";
import {
  FaDiscord,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash, SiSass } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function AboutSkils() {
  return (
    <div className="mt-[10vh] w-full  flex ">
      <div className="w-[50vw] text-white/85 flex flex-col gap-3 px-10 pt-20 ">
        <div className="flex flex-col gap-2" data-aos="fade-down">
          <h1 className="text-4xl text-blue-300 font-bold italic ">About Me</h1>
          <p className="text-xl italic font-medium ">
            Hello! My name is Aymen Abbad Andaloussi, I have 25 yo, I am a
            Fullstack Developer with a background in Computer Science. I studied
            Software Engineering and gained solid experience in designing and
            developing web applications.
          </p>
        </div>
        <div className="flex flex-col gap-2" data-aos="fade-down">
          <h1 className="text-4xl text-blue-300 font-bold italic pt-10">
            Education
          </h1>
          <p className="text-xl italic font-medium ">
            I have a strong background in Computer Science, where I gained a
            solid foundation in software development, algorithms, and emerging
            technologies.
          </p>
          <p className="text-xl italic font-medium ">
            I have studied and practiced a wide range of technologies, including
            HTML, CSS, JavaScript, React.js, Git, GitHub, Bash, Sass, Bootstrap,
            Tailwind CSS, and Laravel.
          </p>
        </div>
        <div className="flex flex-col gap-2" data-aos="fade-up">
          <h1 className="text-4xl text-blue-300 font-bold italic pt-10">
            Social Media
          </h1>
          <div className="flex gap-15 pt-3 ">
            <Link
              to="https://github.com/aymen-abbad-andaloussi"
              className="hover:text-blue-400 transition "
            >
              <FaGithub className="text-7xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/aymen-abbad-andaloussi-647377275/"
              className="hover:text-blue-400 transition "
            >
              <FaLinkedin className="text-7xl" />
            </Link>
            <Link
              to="https://discord.com/"
              className="hover:text-blue-400 transition "
            >
              <FaDiscord className="text-7xl" />
            </Link>
            <Link
              to="https://www.instagram.com/aymen_abbad_andaloussi_v2/"
              className="hover:text-blue-400 transition "
            >
              <FaSquareInstagram className="text-7xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50vw] h-[80vh] p-20 text-white ">
        <div
          className="border border-white/20 p-10 italic flex flex-col items-center gap-10 rounded-3xl bg-white/1 "
          data-aos="flip-left"
        >
          <h1 className="text-5xl font-semibold text-blue-400">Languages</h1>
          <div className="flex flex-wrap gap-5 w-fit justify-center ">
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl  ">
              <FaHtml5 className="w-[100%] h-[70%] text-orange-600 " />
              <h1 className="text-2xl font-bold italic text-center text-orange-600 ">
                HTML
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <IoLogoCss3 className="w-[100%] h-[70%] text-blue-500 " />
              <h1 className="text-2xl font-bold italic text-center text-blue-500 ">
                CSS
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <FaJsSquare className="w-[100%] h-[70%] text-yellow-400 " />
              <h1 className="text-xl font-bold italic text-center text-yellow-400 ">
                JavaScript
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <RiReactjsLine className="w-[100%] h-[70%] text-blue-400 " />
              <h1 className="text-2xl font-bold italic text-center text-blue-400 ">
                React.Js
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <FaGitAlt className="w-[100%] h-[70%] text-orange-500 " />
              <h1 className="text-2xl font-bold italic text-center text-orange-500 ">
                Git
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <FaGithubSquare className="w-[100%] h-[70%] text-black " />
              <h1 className="text-2xl font-bold italic text-center text-black ">
                Github
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <VscTerminalBash className="w-[100%] h-[70%] " />
              <h1 className="text-2xl font-bold italic text-center ">Bash</h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <SiSass className="w-[100%] h-[70%] text-pink-400 " />
              <h1 className="text-2xl font-bold italic text-center text-pink-400 ">
                Sass
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-3 border border-white/30 rounded-2xl ">
              <BsBootstrapFill className="w-[100%] h-[70%] text-purple-900 " />
              <h1 className="text-xl font-bold italic text-center text-purple-900 ">
                Bootstrap
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-2 border border-white/30 rounded-2xl ">
              <RiTailwindCssFill className="w-[100%] h-[70%] text-cyan-500 " />
              <h1 className="text-xl font-bold italic text-center text-cyan-500 ">
                TailwindCss
              </h1>
            </div>
            <div className="bg-white/5 flex flex-col gap-2 w-[10rem] h-[9rem] p-3 border border-white/30 rounded-2xl ">
              <FaLaravel className="w-[100%] h-[70%] text-red-600 " />
              <h1 className="text-2xl font-bold italic text-center text-red-600 ">
                Laravel
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
