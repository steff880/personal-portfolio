import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import Spinner from "./ui/Spinner.jsx";

const Hero = lazy(() => import("./components/Hero/Hero.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const Testimonials = lazy(
  () => import("./components/Testimonials/Testimonials.jsx"),
);
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const testimonials = useRef(null);
  const contact = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const topMargin = 96;

    const sections = [home, about, projects, testimonials, contact];
    const handleActiveSectionOnScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = null;

      sections.forEach((section) => {
        const sectionOffsetTop = section.current.offsetTop - topMargin;
        const sectionHeight = section.current.offsetHeight;

        if (
          pageYOffset >= sectionOffsetTop &&
          pageYOffset < sectionOffsetTop + sectionHeight
        ) {
          newActiveSection = section.current.id;
        }

        setActiveSection(newActiveSection);
      });
    };

    window.addEventListener("scroll", handleActiveSectionOnScroll);

    return () => {
      window.removeEventListener("scroll", handleActiveSectionOnScroll);
    };
  }, [activeSection]);

  return (
    <Suspense fallback={<Spinner />}>
      <Navbar activeSection={activeSection} />
      <Hero ref={home} />
      <About ref={about} />
      <Projects ref={projects} />
      <Testimonials ref={testimonials} />
      <Contact ref={contact} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontFamily: "inherit",
            fontWeight: "lighter",
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--dark-blue)",
            color: "white",
            boxShadow: "0px 2px 2px 0px rgba(255,255,255,0.1)",
          },
        }}
      />
    </Suspense>
  );
};

export default App;
