var express = require('express');
var router = express.Router();
const getCoords = require('../utils/getCoord')
const getWeather = require('../utils/getWeather')

/* GET home page. */
router.get("/weather", function(req, res){
  const query = req.query;
  if(!query.city){
    console.log(query, city)
    return res.redirect("/")
  }
  getCoords(res, query.city, getWeather);
  //template is rendered inside getWeather()
  
})



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather App' });
});

module.exports = router;
