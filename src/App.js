import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journey from "./components/Journey/Journey";
import Goals from "./components/Goals/Goals";
import Gallery from "./components/Gallery/Gallery";
import Ideology from "./components/Ideology/Ideology";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Goals />
        <Gallery />
        <Ideology />
        <Contact />
      </main>
    </>
  );
}