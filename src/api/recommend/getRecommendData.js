const express = require("express")
const {recommendTable} = require("./recommendTable")

let app = express() // 使用exoress

app.all("*", function (req, res, next) { //解决跨域请求问题
  res.header({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
  });
  if (req.method === "OPTIONS") {
      res.send(200)
      // eslint-disable-next-line no-console
      console.log("has option")
  } else {
      next()
  }
});

// 监听接口
app.get("/api/getRecommendData", function (req,res) {
  recommendTable.find({},{
    __v:false,
    _id:false
  }).then((data) => {
    console.log("查询成功")
    res.send(JSON.stringify(data))
  }).catch((err) => {
    console.log("查询失败")
    if(err) throw err
  })
})
app.listen(9527)
