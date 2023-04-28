import styled from "styled-components";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
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
    </nav>
  );
}

export default Navbar;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
