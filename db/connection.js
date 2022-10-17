import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = "new_template_db";

mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`, mongooseConfig);

mongoose.connection.on("connected", () => {
  console.log("connected to database");
});
mongoose.connection.on("disconnected", () => {
  console.log("disconnected from database");
});
mongoose.connection.on("error", (err) => {
  console.error("ERROR! : ", err);
});

export default mongoose;
