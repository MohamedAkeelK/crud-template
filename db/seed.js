import List from "../models/List.js";
import mongoose from "mongoose";
async function insertData() {
  await List.deleteMany({});

  await List.create({
    name: "Zakk's To Do List",
    items: [
      {
        title: "Call parents",
        status: "Incomplete",
        deadline: "2020-01-01",
      },
      {
        title: "Tell SEI 33 they're awesome",
        status: "Complete",
        deadline: "2019-11-08",
      },
    ],
  });
  mongoose.disconnect();
}

insertData();
