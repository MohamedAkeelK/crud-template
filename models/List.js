import mongoose from "../db/connection.js";

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  items: [
    new mongoose.Schema({
      title: String,
      status: {
        type: String,
        enum: ["Done", "Complete", "Incomplete"],
      },
      deadline: String,
    }),
  ],
});

export default mongoose.model("List", listSchema);
