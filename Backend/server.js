const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: `${path.resolve()}/config.env` });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to DataBase successfully"))
  .catch((err) => console.log(`connection failed ${err}`));

const port = process.env.PORT;

app.listen(port, () => {
  console.log("application is running in port 8000");
});
