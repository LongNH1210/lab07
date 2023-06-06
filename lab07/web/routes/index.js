var express = require('express');
const MobileModels = require('../models/MobileModels');
const { request } = require('../app');
var router = express.Router();

router.get('/', async (req, res) => {
  var mobiles = await MobileModels.find({});

  var total = await MobileModels.count();
  res.render('index', { mobiles: mobiles, total: total });
});

router.get('/list', async (req, res) => {
  var mobiles = await MobileModels.find({});

  res.render('index', { mobiles: mobiles });
});

router.get('/delete/:id', async(req, res) => {
  // var id = req.params.id;
  // var mobile = await MobileModels.findById(id);
  // await MobileModels.deleteOne(mobile);
  await MobileModels.findByIdAndDelete(req.params.id)
    .then(() => { console.log('Delete Mobile Succeed') })
    .catch((err) => { console.log('Delete Mobile Fail') });
  res.redirect('/');
});

router.get('/drop', async (req, res) => {
  await MobileModels.deleteMany({})
    .then(() => { console.log('Delete all mobiles succeed') });
  res.redirect('/');
});


module.exports = router;