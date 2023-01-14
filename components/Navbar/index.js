import styled from "styled-components";

function Navbar() {
  return (
    <StyledList>
      <li>Möbelbereich</li>
      <li>Halterungen</li>
      <li>Wasserbereich</li>
      <li>Lüftungsbereich</li>
      <li>Elektrobereich</li>
    </StyledList>
  );
}

export default Navbar;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
