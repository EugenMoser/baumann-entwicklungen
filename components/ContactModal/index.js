import Link from 'next/link';
import styled from 'styled-components';

import {
  mdiAccountBoxOutline,
  mdiClose,
  mdiEmailOutline,
  mdiMailboxOpenOutline,
  mdiPhoneOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

import { strings } from '../../helpers/strings';

function ContactModal({ openContact, setOpenContact }) {
  function onClickBackground() {
    setOpenContact(!openContact);
  }

  return (
    <>
      <StyledContactButton
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Icon path={mdiAccountBoxOutline} />
        <p> {strings.contaktButtonlabel}</p>
      </StyledContactButton>
      {openContact && (
        <ModalBackground onClick={onClickBackground}>
          <Modal>
            <StyledCloseButton
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Icon
                path={mdiClose}
                size={1.3}
              />
            </StyledCloseButton>
            <h1> {strings.contactModalHeadline}</h1>
            <StyledAdress>
              <StyledAdressDiv>
                <Icon
                  path={mdiMailboxOpenOutline}
                  size={1}
                />
                <div>
                  {strings.company}
                  <br />
                  {strings.street}
                  <br />
                  {strings.postalCode} {strings.city}
                  <br />
                  {strings.country}
                </div>
              </StyledAdressDiv>

              <br />
              <StyledLink href={`tel:${strings.phoneNumber}`}>
                <Icon
                  path={mdiPhoneOutline}
                  size={1}
                />{' '}
                <span>{strings.displayPhoneNumber}</span>
              </StyledLink>
              <br />
              <StyledLink href={`mailto:${strings.mailAddress}`}>
                <Icon
                  path={mdiEmailOutline}
                  size={1}
                />
                <span>{strings.mailAddress}</span>
              </StyledLink>
            </StyledAdress>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ContactModal;

const StyledContactButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: self-end;
  background-color: transparent;
  cursor: pointer;
  max-width: 50px;
  max-height: 90px;
  font-size: 100%;
  border: none;
  @media (max-width: 768px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.address`
  flex-direction: column;
  font-style: normal;
  position: relative;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60vw;
  height: auto;

  max-width: 500px;
  max-height: 320px;
  z-index: 200;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
  padding: 30px 30px;
  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }
    font-size: 1rem;
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: auto;
    top: 0;
    transform: translate(-50%, 0);
  }
`;

const StyledAdress = styled.address`
  font-style: normal;
  margin-top: 40px;
  line-height: 1.5;

  Link {
    text-decoration: none;
  }
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
`;

const StyledAdressDiv = styled.div`
  display: flex;
  div {
    margin-left: 20px;
  }
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
