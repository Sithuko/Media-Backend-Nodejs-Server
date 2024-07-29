require('dotenv').config();
let express = require('express');
let app = express();
//let seeder = require('./database/seeder');
let {save,paginate} = require('./database/product');

//let {all,save,update,destory,getPost} = require('./database/cat');


// async function saveData(){
//     let Catobj = {
//         id : 1,
//         name: 'KgKg',
//         image: 'image1',
//         since: Date.now()
//     };
//     try {
//         let savedData = await save(Catobj);
//         console.log('Data saved successfully:', savedData);
//     } catch (err) {
//         console.error('Error saving data:', err);
//     }
// }


//saveData();

// let Catobj = {
//             id : 2,
//             name: 'PhyoPhyo',
//             image: 'image2',
//             since: Date.now()
//         };
// let Productobj = {
//     catid:2,
//     name:'cat002',
//     price:400,
//     image:'cat002.jpg',
//     description:'No description',
//     since:Date.now()
// }
/////////////////Save obj to db
// save(Catobj)
// save(Productobj)
// .then(result=>{
//     console.log('Data saved successfully:', result);
// })
// .catch(err=>{
//     console.error('Error saving data:', err);
// });


/////////////////update obj to db
// update(Catobj)
// .then(result=>{
//     console.log("Successfully updated.",result);
// })
// .catch(err=>{
//     console.log(err);
// })

////////////////delete obj to db
// destory(Catobj)
// .then(result=>{
//     console.log("Successfully Deleted.",result);
// })
// .catch(err=>{
//     console.log(err);
// })

////////////////Search and show all from collection
// all()
// .then(result=>{
//     console.log('Save Data:', result);
// })
// .catch(err=>{
//     console.log('Data Fatching Error :',err);
// })

////////////Seeding to db.
//seeder.seeding();

// getPost("id","catid","products")
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
paginate(5,50)
.then (result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
}) 