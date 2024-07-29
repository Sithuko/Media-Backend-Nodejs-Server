let fs = require('fs');
let product = require('./product');

let seeding = () => {
    fs.readFile('products.json', (err, data) => {
        if (err) { 
            console.log("File Read Error",err);
        }else{
            //console.log(data);
            let products = JSON.parse(data);
            products.forEach(pro=>{
                let obj = {
                    "id":pro.id,
                    "catid":pro.cat_id,
                    "prodid":pro.prodid,
                    "name":pro.name,
                    "image":pro.image,
                    "description":pro.description,
                    "since":Date.now()
                };
    
                product.save(obj);
            })
            console.log("Successfully seeded.");

        }
    });
}

module.exports = { seeding };



