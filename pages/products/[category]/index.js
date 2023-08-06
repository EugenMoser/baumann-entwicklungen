//products by category

import ProductList from "../../../components/ProductList";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
//******** */

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/getdata");
  const data = await res.json();
  return data.products;
};

export async function getStaticPaths() {
  // const res = await fetch("http://localhost:3000/api/getdata");
  // const data = await res.json();
  const products = await getProducts();
  const paths = products.map((product) => {
    return { params: { category: product.category } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const category = context.params.category;
  // const res = await fetch(`http://localhost:3000/api/getdata`);
  // const data = await res.json();
  const products = await getProducts();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return { props: { staticProduct: filteredProducts } };
}
//********** */

function ProductCategory({ staticProduct }) {
  // const router = useRouter();
  // const { category } = router.query;
  console.log("staticProductsn111", staticProduct);

  const category = staticProduct[0].category;
  // const filteredProducts = productsByCategory(products.category);

  // //filter products by category
  // function productsByCategory(category) {
  //   const filteredProduct = products.filter(
  //     (product) => product.category === category
  //   );
  //   return filteredProduct;
  // }
  return (
    <>
      {category === "moebel" ? (
        <StyledH1>Möbelbereich</StyledH1>
      ) : category === "halterung" ? (
        <StyledH1>Halterungen</StyledH1>
      ) : category === "wasser" ? (
        <StyledH1>Wasserbereich</StyledH1>
      ) : category === "lueftung" ? (
        <StyledH1>Lüftungsbereich</StyledH1>
      ) : category === "elektro" ? (
        <StyledH1>Elektrobereich</StyledH1>
      ) : (
        <StyledH1>Keine Kategorie</StyledH1>
      )}
      {staticProduct.map((product) => (
        <StyledListItem key={product.product_id}>
          <StyledLink href={`./${category}/${product.product_id}`}>
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
        </StyledListItem>
      ))}
      {/* {filteredProducts && (
        <ProductList
          products={filteredProducts}
          category={category}
        />
      )} */}
    </>
  );
}
export default ProductCategory;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

//***************** */
const StyledListItem = styled.li`
  width: 100%;
  height: 100px;
  background-color: var(--background-category-color);
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--background-category-hover-color);
  }
`;
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
//***************** */
