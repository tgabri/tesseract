const { TesseractWorker } = require("tesseract.js");
const worker = new TesseractWorker();
const fs = require("fs");
const util = require("util");

const myImage = "images/food.png";

worker
  .recognize(myImage)
  .progress(progress => {
    console.log(progress, "Prog");
  })
  .then(result => {
    console.log(result, "Result");
    fs.writeFile("file.txt", util.inspect(result), err => {
      if (err) console.log(err);
    });
  });
