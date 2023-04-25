import { createDbConnection } from "../../../../../helpers/dbconnection";

async function handlerById(req, res) {
  const { category, id } = req.query;
  console.log(req);
  try {
    const dbconnection = await createDbConnection();
    const query = `
    SELECT product.*,

    (
      SELECT JSON_ARRAYAGG(
        JSON_OBJECT(     
            'article_id', article.article_id,
            'product_id', article.product_id,
            'article_number', article.article_number,
            'article_name', article.article_name,
            'vpe', (
                SELECT JSON_ARRAYAGG(vpe.vpe_value)
                FROM article_vpe_connection
                LEFT JOIN vpe ON article_vpe_connection.vpe_id = vpe.vpe_id
                WHERE article_vpe_connection.article_id = article.article_id 
            )
        )
      )
      FROM article
      WHERE article.product_id = product.product_id
      ) as articles,

      (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT('suffix', product_color_connection.color_suffix,
           'color_name',color.color_name, 'color_id',color.color_id))
        FROM product_color_connection
        LEFT JOIN color ON  product_color_connection.color_id = color.color_id
        WHERE product_color_connection.product_id = product.product_id
       order by product_color_connection.color_suffix
      )AS colors

    FROM product
    WHERE product.category = ? AND product.product_id = ?
    GROUP BY product.product_id
    
`;

    const values = [`${category}`, `${id}`];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ products: data });
    console.log(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default handlerById;
