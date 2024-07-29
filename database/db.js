let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);
let url = "mongodb://localhost:27017/mediaDB";
const connection = mongoose.connect(url);
let mongoosePaginate = require('mongoose-paginate-v2');

let Schema = mongoose.Schema;

let CatSchema = new Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    since: { type: Date, require: true }
});

let ProductSchema = new Schema({
    catid: { type: Number, require: true },
    prodid:{type:Number,require:true},
    name: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
    since: { type: Date, require: true }

});

let cat_model = mongoose.model('category', CatSchema);

ProductSchema.plugin(AutoIncrement,{inc_field:'prodid'});
ProductSchema.plugin(mongoosePaginate);
let product_model = mongoose.model('product',ProductSchema);


module.exports = {
    cat_model,
    product_model
}