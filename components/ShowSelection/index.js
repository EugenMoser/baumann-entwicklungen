import React from "react";
import styled from "styled-components";

export default function ShowSelection({
  selectedArticle,
  selectedColor,
  name,
}) {
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
