import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setIsDisplayed(!isDisplayed);
    }
  }, []);

  return (
    <nav>
      {isDisplayed && (
        <StyledList>
          <li>
            <Link href="/moebel">Möbelbereich</Link>
          </li>
          <li>
            <Link href="/halterung">Halterungen</Link>
          </li>
          <li>
            <Link href="/wasser">Wasserbereich</Link>
          </li>
          <li>
            <Link href="/lueftung">Lüftungsbereich</Link>
          </li>
          <li>
            <Link href="/elektro">Elektrobereich</Link>
          </li>
        </StyledList>
      )}
    </nav>
  );
}

export default Navbar;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
