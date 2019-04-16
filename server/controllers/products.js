const Product = require('../models/product');

const article = (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if(err) return res.json({success: false, err});
    res.status(200).json({
      success: true,
      article: doc
    });
  });
}

module.exports = {
  article
}