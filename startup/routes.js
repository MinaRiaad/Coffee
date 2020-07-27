
const express=require('express');
const error=require('../middlewares/error');
const machines=require('../routes/machine');
const pods=require('../routes/pod');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/machines',machines);
  app.use('/api/pods',pods);
  app.use(error);
};
