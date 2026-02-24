import Link from "next/link";
import styled from "styled-components";

function Quality() {
  return (
    <>
      <StyledH1>Qualitäts- und Umweltpolitik</StyledH1>
      <p>
        Qualität und Umweltschutz sind für uns mehr als Normanforderungen,
        sie sind Teil unserer täglichen Verantwortung. Mit unserem
        integrierten Managementsystem nach ISO 9001 und ISO 14001 stellen
        wir sicher, dass unsere Prozesse zuverlässig, effizient und
        nachhaltig gestaltet sind. Wir arbeiten kundenorientiert, erfüllen
        konsequent alle gesetzlichen Vorgaben und setzen auf vorbeugende
        Qualitätssicherung statt Fehlerkorrektur. Gleichzeitig gehen wir
        verantwortungsvoll mit Energie und Rohstoffen um und verbessern
        unsere Abläufe kontinuierlich. So schaffen wir Vertrauen, sichern
        langfristige Partnerschaften und übernehmen Verantwortung für
        Umwelt und Zukunft.
      </p>
      <StyledCertificateWrapper>
        <StyledSingleCertificateWrapper>
          <StyledH3>Zertifikate ISO_9001</StyledH3>
          <StyledCertificateLink>
            <StyledImage
              src="certificates/ISO_9001_DE.png"
              alt="Qualität und Umweltpolitik Zertifikat ISO 9001"
            />
            <StyledLinkWrapper>
              <Link
                href="certificates/Tilo Baumann ISO 9001 DE neu.pdf"
                target="_blank"
              >
                Zertifikate ISO_9001 Download Deutsche Version
              </Link>
              <Link
                href="certificates/Tilo Baumann ISO 9001 EN.pdf"
                target="_blank"
              >
                Zertifikate ISO_9001 Download Englische Version
              </Link>
            </StyledLinkWrapper>
          </StyledCertificateLink>
        </StyledSingleCertificateWrapper>
        <StyledSingleCertificateWrapper>
          <StyledH3>Zertifikate ISO_14001</StyledH3>
          <StyledCertificateLink>
            <StyledImage
              src="certificates/ISO_14001_DE.png"
              alt="Qualität und Umweltpolitik Zertifikat ISO 14001"
            />
            <StyledLinkWrapper>
              <Link
                href="certificates/Tilo Baumann ISO 14001 DE neu.pdf"
                target="_blank"
              >
                Zertifikate ISO_14001 Download Deutsche Version
              </Link>
              <Link
                href="certificates/Tilo Baumann ISO 14001 EN.pdf"
                target="_blank"
              >
                Zertifikate ISO_14001 Download Englische Version
              </Link>
            </StyledLinkWrapper>
          </StyledCertificateLink>
        </StyledSingleCertificateWrapper>
      </StyledCertificateWrapper>
    </>
  );
}
export default Quality;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const StyledImage = styled.img`
  display: block;
  margin: 2rem auto;
  max-width: 100px;
  height: auto;
`;

const StyledCertificateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 8rem;
  margin-top: 2rem;
`;

const StyledSingleCertificateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--font-color);
  padding: 1rem;
  border-radius: 10px;
`;

const StyledCertificateLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  a {
    color: var(--font-color);
    text-decoration: none;
    font-size: 1rem;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
