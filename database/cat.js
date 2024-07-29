let db = require('./db');

let Cat_Model= db.cat_model;

let all = () => {
    return Cat_Model.find();
}

let update = (obj) => {
    return Cat_Model.updateOne({id:obj.id},{$set:{name:obj.name}});
}
let destory = (obj)=>{
    // let flag_obj = {1:"id",2:"name",3:"image",4:"since"};
    // let con = flag_obj[flag];
    // let query = `${con}:${obj[con]}`;
    return Cat_Model.deleteOne({id:obj.id});
}
let save = (obj) => {

    let cat_data = new Cat_Model(obj);
    return cat_data.save();
}

let getPost = (localId,foreignId,table)=>{
    return Cat_Model.aggregate([
        {
            $lookup:{
                from : table,
                localField : localId,
                foreignField : foreignId,
                as : 'catposts'
            }
        }
    ]).exec();
};
module.exports = {
    save,
    all,
    update,
    destory,
    getPost
}