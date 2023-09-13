import Svg from "../Svg";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiMailboxOpenOutline,
  mdiPhoneOutline,
  mdiEmailOutline,
} from "@mdi/js";
import { strings } from "../../helpers/strings";

function ContactModal({ openContact, setOpenContact }) {
  return (
    <>
      <StyledContactButton
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg
          variant="contact"
          size="80%"
          max-size="50px"
        />
        Kontakt
      </StyledContactButton>
      {openContact && (
        <ModalBackground>
          <Modal>
            <StyledCloseButton
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </StyledCloseButton>
            <h1>Kontaktdaten</h1>
            <StyledAdress>
              <StyledAdressDiv>
                <Icon
                  path={mdiMailboxOpenOutline}
                  size={1}
                />
                <div>
                  Tilo Baumann Spritzgussteile e.K.
                  <br />
                  Brugg 39
                  <br />
                  88167 Gestratz
                </div>
              </StyledAdressDiv>

              <br />
              <StyledLink href={`tel:${strings.phoneNumber}`}>
                <Icon
                  path={mdiPhoneOutline}
                  size={1}
                />{" "}
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

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledContactButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  max-width: 70px;
  max-height: 90px;
  width: 30vw;
  font-size: calc(12px + 0.5vw);
  border: none;
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
  height: 40vh;

  max-width: 500px;
  max-height: 320px;
  z-index: 200;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
  padding: 30px 30px;

  @media (max-width: 560px) {
    h1 {
      font-size: 1rem;
    }
    font-size: 0.75rem;
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
