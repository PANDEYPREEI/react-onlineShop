import mongoose , {ConnectOptions} from 'mongoose';

const main = async() => {

mongoose
  .connect('mongodb+srv://mongoDataAtlas:mon43Db15@cluster0.3wagtep.mongodb.net/?retryWrites=true&w=majority'|| "http://localhost:3000", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
  .then((db) => {
    console.log("Database Connected Successfuly.");
  })
  .catch((err) => {
    console.log("Error Connectiong to the Database",err);
  });
}
export default main;