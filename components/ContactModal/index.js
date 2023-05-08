import Svg from "../Svg";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

function ContactModal() {
  const [openContact, setOpenContact] = useState(false);

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
              Postadresse:
              <br />
              Tilo Baumann Spritzgussteile e.K.
              <br />
              Brugg 39
              <br />
              D-88167 Gestratz
              <br />
              <Link href="tel:+4983837754">Telefon: 08383 7754</Link>
              <br />
              <Link href="mailto:info@baumann-entwicklungen.de">
                email: info@baumann-entwicklungen.de
              </Link>
            </StyledAdress>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ContactModal;

const StyledContactButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  max-width: 70px;
  max-height: 90px;
  width: 30vw;
  font-size: calc(12px + 0.5vw);
  border: none;
  margin-right: 40px;
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
`;

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Modal = styled.address`
  display: flex;
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
  z-index: 200;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
  padding: 20px 20px;

  @media (max-width: 560px) {
    h1 {
      font-size: 0.75rem;
    }
    font-size: 0.75rem;
  }
`;

const StyledAdress = styled.address`
  font-style: normal;

  margin-top: 20px;
  line-height: 1.5;

  Link {
    text-decoration: none;
  }
`;
