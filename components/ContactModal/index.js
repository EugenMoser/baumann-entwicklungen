import Svg from "../Svg";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

function ContactModal() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg variant="contact" />
      </button>

      {openContact && (
        <ModalBackground>
          <Modal>
            <h1>Kontaktdaten</h1>
            <button
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </button>

            <address>
              Postadresse:
              <br />
              Tilo Baumann Spritzgussteile e.K.
              <br />
              Brugg 39
              <br />
              D-88187 Gestratz
              <br />
              <Link href="tel:+4983837754">Telefon: 08383 7754</Link>
              <br />
              <Link href="mailto:info@baumann-entwicklungen.de">
                email: info@baumann-entwicklungen.de
              </Link>
            </address>
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
  width: 80vw;
  height: 40vh;
  z-index: 200;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
  padding: 0 20px;
`;
