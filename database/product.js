let db = require('./db');
let product = db.product_model;

let save = (obj)=>{
    let productdata = product(obj);
    return productdata.save();
};

let paginate = (start,count)=>{
    var options = {
        sort :{_id:1},
        lean : true,
        page : start,
        limit: count
    }
    //console.log("Start : "+start+" Count : "+count);
    return product.paginate({},options);
}


module.exports={save,paginate};

