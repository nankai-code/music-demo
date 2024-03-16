const express = require("express")
const {recommendTable} = require("./recommendTable")

let app = express() // 使用exoress
// 监听接口
app.get("/api/getRecommendData", function (req,res) {
  recommendTable.find({},{
    __v:false,
    _id:false
  }).then((data) => {
    res.send(JSON.stringify(data))
  }).catch((err) => {
    if(err) throw err
  })
})
app.listen(9527)