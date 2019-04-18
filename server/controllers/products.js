const mongoose = require("mongoose");
const Product = require("../models/product");

const getArticleById = (req, res) => {
  const type = req.query.type;
  const items = req.query.id;

  if (type === "array") {
    let ids = items.split(",");
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });
  }

  Product.find({ _id: { $in: items } })
    .populate("brand")
    .populate("wood")
    .exec((err, docs) => {
      return res.status(200).send(docs);
    });
};

getArticles = (req, res) => {
  const order = req.query.order ? req.query.order : "asc";
  const sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  const limit = req.query.limit ? Number(req.query.limit) : 100;
  
  Product.find()
    .populate("brand")
    .populate("wood")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, articles) => {
      if(err) return res.status(400).send(err);
      res.status(200).send(articles);
    });
};

const saveArticle = (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      article: doc
    });
  });
};

module.exports = {
  getArticleById,
  getArticles,
  saveArticle
};
