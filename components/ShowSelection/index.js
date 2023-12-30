import React from "react";

import Link from "next/link";
import styled from "styled-components";

import { mdiEmailOutline } from "@mdi/js";
import Icon from "@mdi/react";

import { getEmailBody, strings } from "../../helpers/strings";

export default function ShowSelection({ selectedArticle, selectedColor }) {
  const colorSuffix =
    selectedColor && selectedColor.suffix === 0
      ? ""
      : " - " + selectedColor.suffix;

  const fulllArticleNumber =
    selectedArticle && selectedArticle.article_number + colorSuffix;

  console.log(
    "description 1",
    selectedArticle
    // selectedArticle.article_description1 &&
    //   selectedArticle.article_description1
  );

  // console.log(
  //   "description 2",
  //   selectedArticle.article_description2 &&
  //     selectedArticle.article_description2
  // );
  // console.log(
  //   "description 3",
  //   selectedArticle.article_description3 &&
  //     selectedArticle.article_description3
  // );

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
            <>
              <StyledLabel>Besonderheiten:</StyledLabel>
              <StyledList>
                {selectedArticle.article_description && (
                  <li>{selectedArticle.article_description}</li>
                )}
                {selectedArticle.article_description1 && (
                  <li>{selectedArticle.article_description1}</li>
                )}
                {selectedArticle.article_description2 && (
                  <li>{selectedArticle.article_description2}</li>
                )}
                {selectedArticle.article_description3 && (
                  <li>{selectedArticle.article_description3}</li>
                )}
              </StyledList>
            </>
          </StyledSpecials>
          <StyledVpe>
            <StyledLabel>Mögliche Verpackungseinheiten (VPE):</StyledLabel>
            <StyledList>
              {selectedArticle.vpe1 && (
                <li>{selectedArticle.vpe1} Stück</li>
              )}
              {selectedArticle.vpe2 && (
                <li>{selectedArticle.vpe2} Stück</li>
              )}
              {selectedArticle.vpe3 && (
                <li>{selectedArticle.vpe3} Stück</li>
              )}
              {selectedArticle.vpe4 && (
                <li>{selectedArticle.vpe4} Stück</li>
              )}
            </StyledList>
          </StyledVpe>
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

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0%.5;
  text-decoration: underline;
`;

const StyledVpe = styled.div`
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
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
