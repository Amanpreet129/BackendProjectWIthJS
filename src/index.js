import dotenv from "dotenv";
import app from "./app.js";
import connectToDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER is listing on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`CONNECTION to DB FAILED: ${err}`);
  });
