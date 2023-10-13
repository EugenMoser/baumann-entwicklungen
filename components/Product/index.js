import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Product({ product, category, hrefProduct }) {
  return (
    <StyledLink href={`.${hrefProduct}/${category}/${product.product_id}`}>
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
        <h4>{product.product_name}</h4>
        <StyledP>{product.product_description1}</StyledP>
      </TextWrapper>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 2rem;
  align-items: center;
  text-decoration: none;
  color: var(--font-color);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  font-size: 1.25rem;
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
