import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function Product({
  product,
  category,
  hrefProduct,
  setSearchInputText,
}) {
  return (
    <StyledButton
      onClick={() => setSearchInputText && setSearchInputText('')}
    >
      <StyledLink
        href={`.${hrefProduct}/${category}/${product.product_id}`}
      >
        <ImageWrapper>
          <StyledImage
            src={
              product.product_imagepath_small
                ? product.product_imagepath_small
                : '/images/placeholder.jpg'
            }
            alt={product.product_name}
            width={80}
            height={80}
          />
        </ImageWrapper>
        <StyledButton
          onClick={() => setSearchInputText && setSearchInputText('')}
        >
          <StyledLink
            href={`.${hrefProduct}/${category}/${product.product_id}`}
          >
            <ImageWrapper>
              <StyledImage
                src={
                  product.product_imagepath_small
                    ? product.product_imagepath_small
                    : '/images/placeholder.jpg'
                }
                alt={product.product_name}
                width={80}
                height={80}
              />
            </ImageWrapper>

            <TextWrapper>
              <h3>{product.product_name}</h3>
              <p>{product.product_description1}</p>
            </TextWrapper>
          </StyledLink>
        </StyledButton>
        <TextWrapper>
          <h3>{product.product_name}</h3>
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
  min-width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 1rem;
  align-items: center;
  color: var(--font-color);
  text-decoration: none;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  h3 {
    font-size: var(--large-product-headline);
  }
  p {
    font-size: var(--large-product-description);
    padding-right: 1rem;
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: var(--medium-product-headline);
    }
    p {
      font-size: var(--medium-product-description);
    }
  }
  @media (max-width: 650px) {
    h3 {
      font-size: var(--small-product-headline);
    }
    p {
      font-size: var(--small-product-description);
    }
  }
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
  @media (max-width: 650px) {
    max-width: 60px;
    max-height: 60px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  font-size: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
`;
