import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Leadership />
      <Divider />
      <Volunteering />
      <Divider />
      <Contact />
      <Analytics />
    </>
  );
}
