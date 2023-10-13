import styled from "styled-components";
import { strings } from "../helpers/strings";
import Link from "next/link";
function Imprint() {
  return (
    <>
      <StyledH1>Impressum</StyledH1>
      <StyledAdress>
        <h4>Postadresse</h4>
        Tilo Baumann Spritzgussteile e.K.
        <br />
        Brugg 39
        <br />
        88167 Gestratz
        <br /> <br />
        <p>
          <h4> Inhaber</h4>
          Tilo Baumann
        </p>
        <br />
        <p>
          <h4>Kommunikation</h4>
          <StyledLink href={`tel:${strings.phoneNumber}`}>
            Telefon:<span>{strings.displayPhoneNumber}</span>
          </StyledLink>
          <StyledDiv>
            Telefax: <span>{strings.displayFaxNumber}</span>
          </StyledDiv>
          <StyledLink href={`mailto:${strings.mailAddress}`}>
            Mail: <span>{strings.mailAddress}</span>
          </StyledLink>
        </p>
      </StyledAdress>
      <br />
      <p>
        <h4>Registereintrag</h4>
        Amtsgericht Kempten <br />
        HRA 9734
      </p>
      <br />
      <p>
        <h4>Steuernummer</h4>
        USt-IdNr.: DE 247 636 303 <br />
        Steuer-Nr.: 134/203/10670
      </p>
      <br />
      <StyledCite>
        Quelle: Disclaimer von eRecht24, dem Portal zum Internetrecht von
        Rechtsanwalt Sören Siebert.
      </StyledCite>
    </>
  );
}
export default Imprint;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledCite = styled.cite`
  font-size: 0.8rem;
`;

const StyledAdress = styled.address`
  font-style: normal;
`;
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: var(--font-color);
  span {
    margin-left: 20px;
  }
  &:hover,
  :active {
    color: var(--font-color-hover);
    text-decoration: underline;
  }
`;
const StyledDiv = styled.div`
  span {
    margin-left: 20px;
  }
`;
