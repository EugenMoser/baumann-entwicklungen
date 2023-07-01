import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Product({ product, category }) {
  return (
    <StyledLink href={`./${category}/${product.product_id}`}>
      <StyledImage
        src="/../public/images/a_6010-Schliesskeil.webp"
        alt={product.product_name}
        width={90}
        height={90}
        sizes="60vw"
      />

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

const StyledImage = styled(Image)`
  max-width: 90%;
  height: auto;
  border-radius: 50%;
  margin-left: 1rem;
`;
