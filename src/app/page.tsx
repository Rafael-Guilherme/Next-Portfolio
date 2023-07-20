import Header from "@/components/header/Header"
import Navbar from "@/components/navbar/Navbar"
import Techs from "@/components/tech/Techs"


export default function Home() {
  return (
    <div className="w-[1280px]">
      <Navbar />
      <Header />
      <Techs />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Hello World!</h1>
      </div>
    </div>
  )
}
