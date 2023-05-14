import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ProductDetails() {
  const router = useRouter();
  const { category, id } = router.query;
  console.log(router);
  const [product, setProduct] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata/${category}/${id}`;

  useEffect(() => {
    try {
      function getDataById() {
        fetch(apiURL)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setProduct(data.products[0]);
          });
      }
      getDataById();
    } catch (error) {
      console.error("Fehler Produkt" + error.message);
    }
  }, [apiURL]);

  console.log(product);
  if (!product) return <h2>Produkte werden geladen</h2>;

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

  return (
    <>
      <section>
        <h3>Produkt - Name:{name}</h3>
        <p>category:{cat}</p>
        <p>material:{material}</p>
        <p>description1:{description1}</p>
        <p>description2:{description2}</p>
        <p>description3:{description3}</p>
        <ul>
          {product.colors &&
            product.colors.map((color) => (
              <li key={color.color_id}>Farbe: {color.color_name}</li>
            ))}
        </ul>
        <img
          src={image}
          alt=""
        />
      </section>
      <section>
        <ul>
          {product.articles &&
            product.articles.map((article) => (
              <li key={article.article_id}>
                <p>Artikel Nummer: {article.article_number}</p>
                <p>Artikel Name: {article.article_name}</p>{" "}
                <div>
                  <ul>
                    {article.vpe &&
                      article.vpe.map((vpe) => (
                        <li key={vpe}>VPE: {vpe}</li>
                      ))}
                  </ul>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
export default ProductDetails;
