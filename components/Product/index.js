import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { strings } from "../../helpers/strings";

export default function Product({
  product,
  category,
  hrefProduct,
  setSearchInputText,
}) {
  let hrefLink = "";
  //check if category have a section value
  if (strings.sections.some((section) => section.label === category)) {
    hrefLink = `.${hrefProduct}/${category}/${product.product_id}`;
    //check if is search from start page
  } else if (category === "startPage") {
    hrefLink = `.${hrefProduct}/${product.category}/${product.product_id}`;
    //check if is search from product details page
  } else if (category === "productDetails") {
    hrefLink = `../${product.category}/${product.product_id}`;
  }

  return (
    <StyledButton
      onClick={() => setSearchInputText && setSearchInputText("")}
    >
      <StyledLink
        href={`${hrefLink}`}
        // scroll={false}
      >
        <ImageWrapper>
          <StyledImage
            src={
              product.product_imagepath_small
                ? product.product_imagepath_small
                : "/images/placeholder.jpg"
            }
            alt={product.product_name}
            width={80}
            height={80}
            // sizes="60vw"
          />
        </ImageWrapper>

        <TextWrapper>
          <StyledH2>{product.product_name}</StyledH2>
          <p>{product.product_description1}</p>
        </TextWrapper>
      </StyledLink>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;

  gap: 2rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--background-category-hover-color);
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  text-decoration: none;
  display: grid;
  grid-template-columns: 20% 1fr;
  align-items: center;
  color: var(--font-color);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  p {
    font-size: 1.25rem;
  }
`;
const StyledH2 = styled.h2`
  font-size: 1.5rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  margin-left: 1rem;
  width: 80px;
  height: 80px;
`;

const StyledImage = styled(Image)`
  font-size: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
`;
