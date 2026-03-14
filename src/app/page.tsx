import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import VideoWorks from "@/components/VideoWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="home" className="bg-[#121212] min-h-screen text-white relative">
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Projects />
      <VideoWorks />
      <About />
      <Contact />
    </main>
  );
}
