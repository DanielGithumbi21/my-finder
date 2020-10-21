const router = require("express").Router();
const post = require("../models/post.models");

router.route("/").get((req, res) => {
  post
    .find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const documentName = req.body.documentName;
  const documentType = req.body.documentType;
  const documentNumber = req.body.documentNumber;
  const newPost = new post({
    Name,
    documentName,
    documentType,
    documentNumber,
  });
  newPost
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.status(400).json("Error" + err));
});
module.exports = router;
