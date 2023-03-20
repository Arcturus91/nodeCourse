const fs = require("fs");
const path = require("path");
const { projectPath } = require("../util/path");
const p = path.join(projectPath, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) cb([]);
    cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((arrayData) => {
      let products = arrayData;
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
