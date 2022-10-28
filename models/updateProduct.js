var pg_conn = require('./pg_config');
async function updateProduct(product_id,name,quantity,price,shop_id) {
    const query = {
        text: `UPDATE product SET id = $1, name = $2, quantity = $3, price = $4, shop =$5 WHERE id = $1`,
        values: [product_id,name,quantity,price,shop_id,product_id]
    }
    var query_data = await pg_conn.query(query); 
}
module.exports = updateProduct;
