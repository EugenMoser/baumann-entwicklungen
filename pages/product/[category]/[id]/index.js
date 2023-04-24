import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ProductDetails() {
  const router = useRouter();
  const { category, id } = router.query;

  const [product, setProduct] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata/${category}/${id}`;

  useEffect(() => {
    try {
      function getDataById() {
        fetch(apiURL)
          .then((response) => response.json())
          .then((data) => setProduct(data.products[0]));
      }
      getDataById();
    } catch (error) {
      console.error("Fehler Produkt" + error.message);
    }
  }, []);

  const {
    product_id: Id,
    product_name: name,
    product_description1: description1,
    product_description2: description2,
    product_description3: description3,
    product_material: material,
    product_imagepath: image,
    category: cat,
  } = product;

  if (!product) return <h2>Produkte werden geladen</h2>;

  return (
    <>
      <h2>Product - ID {id}</h2>
      <h3>Produkt - Name:{name}</h3>
      <p>category:{cat}</p>
      <p>material:{material}</p>
      <p>description1:{description1}</p>
      <p>description2:{description2}</p>
      <p>description3:{description3}</p>

      {product.articles &&
        product.articles.map((article) => (
          <ul key={article.article_id}>
            <li>
              <p>Artikel Nummer: {article.article_number}</p>
            </li>
            <li>
              <p>Artikel Name: {article.article_name}</p>
            </li>

            <ul>
              {article.vpe &&
                article.vpe.map((vpe) => <li key={vpe}>VPE: {vpe}</li>)}
            </ul>
          </ul>
        ))}
      {product.colors &&
        product.colors.map((color) => (
          <ul key={color.color_id}>
            <li>Farbe: {color.color_name}</li>
          </ul>
        ))}
      <img
        src={image}
        alt=""
      />
    </>
  );
}
export default ProductDetails;
