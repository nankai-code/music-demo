const express = require("express")
const {getRecommendData} = require("./recommend/getRecommendData")
const {getRecommendDetailData} = require("./recommendDetail/setDetailDate")
const {getSingerData} = require("./singer/getSingerData")
var bodyParser = require('body-parser')

let app = express() // 使用exoress
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.all("*", function (req, res, next) { //解决跨域请求问题
  res.header({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
  });
  if (req.method === "OPTIONS") {
      // res.send(200)
      res.status(200).send("OK")
      // eslint-disable-next-line no-console
      console.log("has option")
  } else {
      next()
  }
});

app.get("/api/getRecommendData",getRecommendData)
app.get("/api/getRecommendDetailData/:id",getRecommendDetailData)
app.get("/api/getSingerData",getSingerData)

app.listen(9527)
