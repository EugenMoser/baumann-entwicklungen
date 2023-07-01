import React from "react";
import styled from "styled-components";

export default function ShowSelection({
  selectedArticle,
  selectedColor,
  name,
}) {
  console.log("selectedColor on showsection", selectedColor);
  console.log("selectedArticle on showsection", selectedArticle);

  return (
    <>
      {selectedArticle && selectedColor ? (
        <>
          <h3>Ergebnis</h3>
          <p>
            Der Ausgewählte <StyledSpan>{name} </StyledSpan>mit{" "}
            <StyledSpan>{selectedArticle.article_description}</StyledSpan>{" "}
            und in der Farbe
            <StyledSpan> {selectedColor.color_name}</StyledSpan> hat die
          </p>
          <p>
            Artikelnummer: {selectedArticle.article_number} -{" "}
            {selectedColor.suffix}
          </p>{" "}
          <ul>
            Verpankungseinheiten:
            {selectedArticle.vpe1 && <li>{selectedArticle.vpe1} Stück</li>}
            {selectedArticle.vpe2 && <li>{selectedArticle.vpe2} Stück</li>}
            {selectedArticle.vpe3 && <li>{selectedArticle.vpe3} Stück</li>}
            {selectedArticle.vpe4 && <li>{selectedArticle.vpe4} Stück</li>}
          </ul>
        </>
      ) : (
        <p>Bitte Farbe und Produktvariante auswähle</p>
      )}
    </>
  );
}

const StyledSpan = styled.span`
  font-weight: bold;
`;
