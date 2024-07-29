const fs = require('fs');

let products = [];

for (let i = 1; i <= 300; i++) {
    let product = {
        id: i,
        cat_id: Math.floor((i - 1) / 10) + 1, // Assign categories in groups of 10
        name: `Product ${i}`,
        price: i * 10.0,
        image: `product${i}.jpg`,
        description: `Description for product ${i}`,
        deleted_at: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    products.push(product);
}

fs.writeFile('products.json', JSON.stringify(products, null, 2), (err) => {
    if (err) throw err;
    console.log('products.json has been saved!');
}); 