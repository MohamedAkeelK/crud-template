import express from "express";
const app = express();
import parser from "body-parser";
import List from "./models/List.js";

app.use(parser.json());

app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});

app.get("/", (req, res) => {
  res.send({
    url: "http://localhost:3000/list",
  });
});

app.get("/list", (req, res) => {
  List.find({}).then((lists) => {
    res.json(lists);
  });
});

app.get("/list/:id", (req, res) => {
  List.findOne({ _id: req.params.id }).then((list) => {
    res.json(list);
  });
});

// app.get("/list/:id", req, res) => {
//   List.findById(req.params.id).then(list => {
//     res.json(list);
//   });
// });

app.post("/list", (req, res) => {
  List.create(req.body).then((list) => {
    res.json(list);
  });
});

app.post("/list/:id/item", (req, res) => {
  List.findByIdAndUpdate(
    req.params.id,
    { $push: { items: req.body } },
    { new: true },
    { useFindAndModify: false }
  ).then((list) => {
    res.json(list);
  });
});

app.put("/list/:id", (req, res) => {
  List.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (list) => {
      res.json(list);
    }
  );
});

app.delete("/list/:id", (req, res) => {
  List.findOneAndRemove({ _id: req.params.id }).then((list) => {
    res.json({
      message: "deleted list",
      list: list,
    });
  });
});
