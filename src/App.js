import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Topbar, Sidebar, Container } from "./components/modules";
import { About, Contact, MyProjects, Skills } from "./sections/modules";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState("#about");

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const containerOffSet = e.currentTarget.scrollTop;

    const aboutTop = aboutRef.current.offsetTop;
    const skillsTop = skillsRef.current.offsetTop;
    const projectsTop = projectsRef.current.offsetTop;
    const contactTop = contactRef.current.offsetTop;

    if (containerOffSet >= aboutTop && containerOffSet < skillsTop) {
      setSelected("#about");
    }
    if (containerOffSet >= skillsTop) {
      setSelected("#skills");
    }
    if (containerOffSet >= projectsTop) {
      setSelected("#my-projects");
    }
    if (containerOffSet >= contactTop - 300) {
      setSelected("#contact");
    }
  };

  useEffect(() => {
    containerRef.current.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Sidebar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        selected={selected}
      />

      <Container ref={containerRef}>
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <MyProjects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Container>
    </div>
  );
}

export default App;
