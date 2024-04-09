import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import styled, { css } from "styled-components";

import { sections } from "../../helpers/constants";
import BurgerMenu from "./Burger";
import Menu from "./Menu";

function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const path = router.asPath;

  // Window width check
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Effect for resizing window
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (path === "/") {
      setIsDisplayed(false);
    } else setIsDisplayed(true);
  }, [path]);

  return (
    <>
      <StyledNav
        isMobile={isMobile}
        isDisplayed={isDisplayed}
      >
        {!isMobile && (
          <Menu
            sections={sections}
            path={path}
          />
        )}
        {isMobile && (
          <>
            <h2>
              {sections.map(
                (section) => path.includes(section.label) && section.name
              )}
            </h2>
            <BurgerMenu
              sections={sections}
              path={path}
            />
          </>
        )}
      </StyledNav>
    </>
  );
}

export default Navbar;

const StyledNav = styled.nav`
  background-color: var(--white);
  position: sticky;
  top: 0;
  margin: 2rem 0;

  z-index: 50;
  ${(props) =>
    props.isMobile &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    !props.isDisplayed &&
    css`
      display: none;
    `}
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
