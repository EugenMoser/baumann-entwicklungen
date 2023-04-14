import { createDbConnection } from "../../../../../helpers/dbconnection";

async function handlerById(req, res) {
  const { category, id } = req.query; // Extrahieren Sie den Wert von 'id' aus der URL
  try {
    const dbconnection = await createDbConnection();
    const query = `
    
  SELECT product.*, 
    JSON_ARRAYAGG(
      JSON_OBJECT(
        'article_id', article.article_id, 
        'article_number', article.article_number,
        'article_name', article.article_name, 
        'article_description', article.article_description,
        'vpe', (
          SELECT JSON_ARRAYAGG(vpe.vpe_value)
          FROM article_vpe_connection
          LEFT JOIN vpe ON article_vpe_connection.vpe_id = vpe.vpe_id
          WHERE article_vpe_connection.article_id = article.article_id
          group by article.article_number
        )
      )
    ) AS articles
  FROM product
  LEFT JOIN article ON product.product_id = article.product_id
  WHERE product.category = ? AND product.product_id = ?
  GROUP BY product.product_id`;

    const values = [`${category}`, `${id}`];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default handlerById;

// const query = `SELECT *
//     FROM (product
//     LEFT JOIN article ON product.product_id = article.product_id)
//     LEFT JOIN article_vpe_connection ON article.article_id = article_vpe_connection.article_id
//     LEFT JOIN vpe ON article_vpe_connection.vpe_id = vpe.vpe_id

//     WHERE product.category = ? AND product.product_id = ?`;

//   const query = `
//   SELECT product.*,
//    JSON_ARRAYAGG(JSON_OBJECT(
//    'article_id', article.article_id,
//    'article_name', article.article_name,
//    'article_description',article.article_description,

//    ))AS articles,
//    SELECT articles.*
//    JSON_ARRAYAGG( 'vpe_value', vpe.vpe_value) AS VPE
//  FROM product
//  LEFT JOIN article ON product.product_id = article.product_id
//  LEFT JOIN article_vpe_connection ON article.article_id = article_vpe_connection.article_id
//  LEFT JOIN vpe ON article_vpe_connection.vpe_id = vpe.vpe_id

//  WHERE product.category = ? AND product.product_id = ?
//  GROUP BY product.product_id , article.article_id`;
