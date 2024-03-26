import mongoose from "mongoose";

const MongoConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
      console.log("MongoDb Connected Successfully");
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default MongoConnection;
