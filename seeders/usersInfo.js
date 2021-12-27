// const { mongo } = require('mongoose');
// const userModel = require('../models/user');
// const connectToMongo = async() =>{
//     await mongo().then(async(mongoose) => {
//         try{
//             const user = {
//                 username = 'admin1',
//                 password = 'admin1'
//             }
//             await new userModel(user).save()
//         }finally{
//             mongoose.connection.close();
//         }
//     })
// }
