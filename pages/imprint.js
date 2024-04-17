import Link from 'next/link';
import styled from 'styled-components';

import { strings } from '../helpers/strings';

function Imprint() {
  return (
    <>
      <StyledH1>{strings.imprint}</StyledH1>
      <StyledAdress>
        <h4> {strings.imprintAdress}</h4>
        <div>
          {strings.company}
          <br />
          {strings.street}
          <br />
          {strings.postalCode} {strings.city}
          <br />
          {strings.country}
        </div>
        <br /> <br />
        <p>
          <h4> {strings.imprintOwner}</h4>
          {strings.imprintOwnerName}
        </p>
        <br />
        <p>
          <h4>{strings.imprintCommunication}</h4>
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
        <h4>{strings.imprintRegister}</h4>
        {strings.imprintRegisterCourt} <br />
        {strings.imprintRegisterNumber}
      </p>
      <br />
      <p>
        <h4>Steuernummer</h4>
        {strings.imprintUST}
        <br />
        {strings.imprintSteuer}
      </p>
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
