import Link from "next/link";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiWaterOutline,
  mdiTableFurniture,
  mdiTournament,
  mdiAirFilter,
  mdiFlashOutline,
} from "@mdi/js";

function Home() {
  const thisYear = new Date().getFullYear();
  const difYear = thisYear - 1984;

  return (
    <>
      <StyledH1>Willkommen auf unserer Webseite</StyledH1>

      <StyledSection>
        <StyledParagraph>
          Wir entwickeln und produzieren im Allgäu seit {difYear} Jahren
          Spritzgussteile für die Caravan Industrie. Für diesen Markt ist
          ein großes Sortiment an Möbelteilen, Halterungen, Lüftungsteilen
          und Dichtungen entstanden. Mit dem 1984 gegründeten Unternehmen
          Wilfried Baumann Spritzgussteile, wurde das Fundament für das in
          zweiter Generation inhabergeführte Familienunternehmen Tilo
          Baumann Spritzgussteile e.K. gelegt.
        </StyledParagraph>
        <StyledH3>Unsere Bereiche</StyledH3>
        <StyledLink href="/moebel">
          <StyledButton>
            <StyledIcon
              path={mdiTableFurniture}
              size={1.5}
            />
            Möbelbereich{" "}
          </StyledButton>
        </StyledLink>
        <StyledLink href="/halterung">
          <StyledButton>
            <StyledIcon
              path={mdiTournament}
              size={1.5}
            />
            Halterungen
          </StyledButton>
        </StyledLink>
        <StyledLink href="/wasser">
          <StyledButton>
            {" "}
            <StyledIcon
              path={mdiWaterOutline}
              size={1.5}
            />
            Wasserbereich
          </StyledButton>
        </StyledLink>{" "}
        <StyledLink href="/lueftung">
          <StyledButton>
            <StyledIcon
              path={mdiAirFilter}
              size={1.5}
            />
            Lüftungsbereich
          </StyledButton>
        </StyledLink>
        <StyledLink href="/elektro">
          <StyledButton>
            <StyledIcon
              path={mdiFlashOutline}
              size={1.5}
            />
            Elektrobereich
          </StyledButton>
        </StyledLink>
      </StyledSection>
    </>
  );
}
export default Home;

const StyledH1 = styled.h1`
  margin: 0 2rem;
  font-size: 2rem;
`;
const StyledH3 = styled.h3`
  display: flex;
  font-size: 1.75rem;
  margin: 2rem 0 0.5rem;
  width: 80%;
`;

const StyledIcon = styled(Icon)`
  margin: auto 1rem auto;
`;

const StyledSection = styled.section`
  width: 80%;
  align-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: var(--background-category-color);
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--background-category-hover-color);
  }
`;

const StyledParagraph = styled.p`
  margin: 1rem 0;
`;
