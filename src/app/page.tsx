import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/next";

/**
 * Section order is tuned for a job search: proof of work first.
 * Experience and Projects lead; About and Education (composed inside
 * About) sit lower as context.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Leadership />
        <Volunteering />
        <Contact />
      </main>
      <Analytics />
    </>
  );
}
