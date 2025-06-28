import CompHomeInfos from "../components/CompHomeInfos";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bgSkyGalaxy h-[100vh] w-[100vw] relative">
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/70 "></div>
      <Nav />
      <CompHomeInfos />
    </div>
  )
}
