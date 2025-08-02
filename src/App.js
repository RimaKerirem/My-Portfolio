import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Topbar, Sidebar, Container } from "./components/modules";
<<<<<<< HEAD
import { About, MyExperiences, Contact, MyProjects, Skills } from "./sections/modules";
=======
import { About, Contact, MyProjects, Skills } from "./sections/modules";
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState("#about");

  const aboutRef = useRef(null);
<<<<<<< HEAD
  const expRef = useRef(null);
=======
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const containerOffSet = e.currentTarget.scrollTop;

    const aboutTop = aboutRef.current.offsetTop;
<<<<<<< HEAD
    const expTop = expRef.current.offsetTop;
=======
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
    const skillsTop = skillsRef.current.offsetTop;
    const projectsTop = projectsRef.current.offsetTop;
    const contactTop = contactRef.current.offsetTop;

<<<<<<< HEAD
    if (containerOffSet >= aboutTop && containerOffSet < expTop) {
      setSelected("#about");
    }
    if (containerOffSet >= expTop) {
      setSelected("#exp");
    }
=======
    if (containerOffSet >= aboutTop && containerOffSet < skillsTop) {
      setSelected("#about");
    }
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
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
<<<<<<< HEAD
        <MyExperiences ref={expRef} />
=======
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
        <Skills ref={skillsRef} />
        <MyProjects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Container>
    </div>
  );
}

export default App;
