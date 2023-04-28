import Link from "next/link";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiWaterOutline,
  mdiTableFurniture,
  mdiTournament,
  mdiAirFilter,
  mdiFlash,
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
        <Link href="/moebel">
          <StyledButton>
            <StyledIcon
              path={mdiTableFurniture}
              size={1}
            />
            Möbelbereich{" "}
          </StyledButton>
        </Link>
        <Link href="/halterung">
          <StyledButton>
            <StyledIcon
              path={mdiTournament}
              size={1}
            />
            Halterungen
          </StyledButton>
        </Link>
        <Link href="/wasser">
          <StyledButton>
            {" "}
            <StyledIcon
              path={mdiWaterOutline}
              size={1}
            />
            Wasserbereich
          </StyledButton>
        </Link>{" "}
        <Link href="/lueftung">
          <StyledButton>
            <StyledIcon
              path={mdiAirFilter}
              size={1}
            />
            Lüftungsbereich
          </StyledButton>
        </Link>
        <Link href="/elektro">
          <StyledButton>
            <StyledIcon
              path={mdiFlash}
              size={1}
            />
            Elektrobereich
          </StyledButton>
        </Link>
      </StyledSection>
    </>
  );
}
export default Home;

const StyledH1 = styled.h1`
  font-size: 1.75rem;
`;
const StyledH3 = styled.h3`
  display: flex;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
  width: 80%;
`;

const StyledIcon = styled(Icon)`
  margin: auto 1rem auto;
`;

const StyledSection = styled.section`
  width: 80%;
  align-self: center;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #dae2e6;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledParagraph = styled.p`
  margin: 1rem 0;
`;
