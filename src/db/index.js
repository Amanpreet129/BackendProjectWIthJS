import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DBNAME}`
    );
    console.log(
      "DB Connected !! on host - ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("DB CONNECTION FAILED - ", error);
    process.exit(1);
  }
};

export default connectToDB;
