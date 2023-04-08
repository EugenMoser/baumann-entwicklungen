// import { createDbConnection } from "../../../helpers/dbconnection";

// async function handler(req, res) {
//   try {
//     const dbconnection = await createDbConnection();
//     const query = "SELECT * FROM product ";
//     const values = [];
//     const [data] = await dbconnection.execute(query, values);
//     dbconnection.end();
//     res.status(200).json({ products: data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// export default handler;
