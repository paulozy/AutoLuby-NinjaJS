"use strict";

var express = require("express");
var router = express.Router();
var data = [];

router.get("/", function (req, res) {
  console.log("[GET] /car:", data);
  res.json(data);
});

router.delete("/:carID", (req, res) => {
  let carID = req.params.carID;

  let carIndex = data.indexOf(carID);

  data.pop(carIndex);
});

router.post("/", function (req, res) {
  data.push({
    id: req.body.id,
    image: req.body.image,
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    plate: req.body.plate,
    color: req.body.color,
  });
  console.log(
    "[POST] /car:",
    JSON.stringify(
      {
        body: req.body,
        data,
      },
      null,
      2
    )
  );
  res.json({ message: "success" });
});

module.exports = router;
