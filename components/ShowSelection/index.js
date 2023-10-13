import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { strings, getEmailBody } from "../../helpers/strings";

export default function ShowSelection({ selectedArticle, selectedColor }) {
  const colorSuffix =
    selectedColor && selectedColor.suffix === 0
      ? ""
      : " - " + selectedColor.suffix;

  const fulllArticleNumber =
    selectedArticle && selectedArticle.article_number + colorSuffix;

  return (
    <StyledResultSection>
      {selectedArticle && selectedColor ? (
        <>
          <StyledArticleNumber>
            Artikelnummer: {fulllArticleNumber}
            {/* {selectedArticle.article_number}
            {selectedColor.suffix === 0
              ? ""
              : " - " + selectedColor.suffix} */}
          </StyledArticleNumber>{" "}
          <StyledSpecials>
            {selectedArticle.article_description && (
              <>
                <p>Besonderheiten:</p>
                <p>{selectedArticle.article_description}</p>
              </>
            )}
            {selectedArticle.article_description1 && (
              <p>{selectedArticle.article_description1}</p>
            )}
            {selectedArticle.article_description2 && (
              <p>{selectedArticle.article_description2}</p>
            )}
            {selectedArticle.article_description3 && (
              <p>{selectedArticle.article_description3}</p>
            )}
          </StyledSpecials>
          <p>Mögliche Verpackungseinheiten (VPE):</p>
          <StyledList>
            {selectedArticle.vpe1 && <li>{selectedArticle.vpe1} Stück</li>}
            {selectedArticle.vpe2 && <li>{selectedArticle.vpe2} Stück</li>}
            {selectedArticle.vpe3 && <li>{selectedArticle.vpe3} Stück</li>}
            {selectedArticle.vpe4 && <li>{selectedArticle.vpe4} Stück</li>}
          </StyledList>
          <StyledForm
            action={`mailto:${strings.mailAddress}?subject=${
              strings.subject
            } &body=${encodeURI(
              getEmailBody(
                selectedArticle.article_name,
                fulllArticleNumber,
                selectedColor.color_name
              )
            )} `}
            method="post"
          >
            <StyledInputButton
              type="submit"
              value={strings.request}
            />
          </StyledForm>
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
  padding: 1rem 1rem;
`;

const StyledArticleNumber = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 1rem;
`;
const StyledSpecials = styled.div`
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  color: red;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-end;
`;

const StyledInputButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 40%;
  height: 2rem;
  border-radius: 4px;
  background-color: black;
  color: var(--white);

  &:hover,
  :active {
    background-color: var(--font-color-hover);
    text-decoration: underline;
    cursor: pointer;
  }
`;
