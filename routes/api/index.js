const route = require('express').Router();
const Informationroute = require('./information')


route.use('/information',Informationroute)

module.exports=route;