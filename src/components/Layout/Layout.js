import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Banner from "../Banner/Banner";
import Opinions from "../Opinions/Opinions";
import Gallery from "../Gallery/Gallery";
import BannerSec from "../BannerSec/BannerSec";
import About from "../About/About";
const Layout = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [opinionSection, setOpinionSection] = useState(false);
  const [ejectToolbar, setEjectToolbar] = useState(false);
  const headerRef = useRef(null);
  const toolbarRef = useRef(null);
  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setEjectToolbar(true);
      } else {
        setEjectToolbar(false);
      }
      lastScrollTop = scrollTop;
    });
  }, [setOpinionSection]);
  useEffect(() => {
    const observeScroll = () => {
      window.addEventListener("scroll", yOffset);
    };
    observeScroll();
    return () => {
      window.removeEventListener("scroll", yOffset);
    };
  });
  useEffect(() => {
    const toolbarHeight = toolbarRef.current
      ? toolbarRef.current.offsetHeight
      : 0;
    const distance = headerRef.current
      ? headerRef.current.offsetHeight - toolbarHeight
      : 0;
    if (scrollY > distance) {
      setOpinionSection(true);
    } else {
      setOpinionSection(false);
    }
  }, [setOpinionSection, scrollY]);

  return (
    <Aux>
      <Header headerRef={headerRef}>
        <Toolbar
          toolbarRef={toolbarRef}
          showToolbar={opinionSection}
          hideToolbar={ejectToolbar}
        />
      </Header>
      <Opinions />
      <Banner />
      <Gallery />
      <BannerSec />
      <About />
    </Aux>
  );
};
export default Layout;
