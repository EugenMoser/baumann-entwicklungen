import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import strings from "../../helpers/strings";

export default function ShowSelection({
  selectedArticle,
  selectedColor,
  name,
}) {
  return (
    <StyledResultSection>
      {selectedArticle && selectedColor ? (
        <>
          {/* <p>
            Der ausgewählte <StyledSpan>{name} </StyledSpan>
            mit der Variante{" "}
            <StyledSpan>{selectedArticle.article_description}</StyledSpan>
            und in der Farbe{" "}
            <StyledSpan> {selectedColor.color_name}</StyledSpan> hat die
          </p> */}
          <StyledArticleNumber>
            Artikelnummer: {selectedArticle.article_number}
            {selectedColor.suffix === 0
              ? ""
              : " - " + selectedColor.suffix}
          </StyledArticleNumber>{" "}
          <StyledList>
            Mögliche Verpackungseinheiten:
            {selectedArticle.vpe1 && <li>{selectedArticle.vpe1} Stück</li>}
            {selectedArticle.vpe2 && <li>{selectedArticle.vpe2} Stück</li>}
            {selectedArticle.vpe3 && <li>{selectedArticle.vpe3} Stück</li>}
            {selectedArticle.vpe4 && <li>{selectedArticle.vpe4} Stück</li>}
          </StyledList>
          <StyledButton>
            {" "}
            <StyledLink href={`mailto:${strings.mailAddress}`}>
              <span>{strings.request}</span>
            </StyledLink>
          </StyledButton>
        </>
      ) : (
        <StyledParagraph>
          Bitte Produkt-Variante und Farbe auswählen.
        </StyledParagraph>
      )}
    </StyledResultSection>
  );
}
const StyledResultSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--background-showSelection-border);
  border-radius: 4px;
  background-color: var(--background-showSelection-color);
  padding: 0.5rem 0.5rem;
`;

const StyledArticleNumber = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  margin: 0 0 1rem;
`;

const StyledList = styled.ul`
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  color: red;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border-style: none;
  width: 40%;
  height: 2rem;
  border-radius: 4px;
  background-color: black;
  color: white;
  &:hover,
  :active {
    background-color: var(--font-color-hover);
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  span {
    color: white;
  }
`;
