import Link from "next/link";
import styled from "styled-components";

import { getEmailBody, strings } from "../../helpers/strings";

export default function ShowSelection({ selectedArticle, selectedColor }) {
  const colorSuffix =
    selectedColor?.suffix === 0 ? "" : " - " + selectedColor?.suffix;

  const fullArticleNumber =
    selectedArticle && selectedArticle.article_number + colorSuffix;

  function addThousandSeparator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <StyledResultSection>
      {selectedArticle && selectedColor ? (
        <>
          <StyledArticleNumber>
            {strings.articleNumberLabel} {fullArticleNumber}
          </StyledArticleNumber>
          <StyledSpecials>
            <StyledLabel>{strings.specialsLabel}</StyledLabel>
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
          </StyledSpecials>
          <StyledVpe>
            <StyledLabel>{strings.vpeLabel}</StyledLabel>
            <StyledList>
              {selectedArticle.vpe1 && (
                <li>{addThousandSeparator(selectedArticle.vpe1)} Stück</li>
              )}
              {selectedArticle.vpe2 && (
                <li>{addThousandSeparator(selectedArticle.vpe2)} Stück</li>
              )}
              {selectedArticle.vpe3 && (
                <li>{addThousandSeparator(selectedArticle.vpe3)} Stück</li>
              )}
              {selectedArticle.vpe4 && (
                <li>{addThousandSeparator(selectedArticle.vpe4)} Stück</li>
              )}
            </StyledList>
          </StyledVpe>
          <StyledInputLink
            href={`mailto:${
              strings.mailAddress
            }?subject=${encodeURIComponent(
              strings.subject,
            )}&body=${encodeURIComponent(
              getEmailBody(
                selectedArticle.article_name,
                fullArticleNumber,
                selectedColor.color_name,
              ),
            )}`}
          >
            {strings.request}
          </StyledInputLink>
        </>
      ) : (
        <StyledParagraph>{strings.chooseProductAndColor}</StyledParagraph>
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

const StyledArticleNumber = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 1rem;
`;
const StyledSpecials = styled.div`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
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

const StyledInputLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  height: 2rem;
  border-radius: 4px;
  background-color: black;
  color: var(--white);
  padding: 0.5rem 1rem;

  &:hover,
  &:active {
    background-color: var(--font-color-hover);
    text-decoration: underline;
    cursor: pointer;
  }
`;
