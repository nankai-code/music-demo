// const express = require("express")
const request = require("request")
const {JSDOM} = require("jsdom")
const {detailTable} = require("./detailTable")
// const fs = require("fs")
// let app = express()
// app.get("/api/recommendDetail/:id", function (req,res) {
//   // console.log(req.params.id)
//   request({
//     method:"GET",
//     // url:"https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=newyqq.taoge&id=7256912512",
//     url:"https://i.y.qq.com/n2/m/share/details/taoge.html",
//     qs:{
//       ADTAG:"newyqq.taoge",
//       id:req.params.id
//     }
//   },function (err,response,body) {
//     let dom = new JSDOM(body, { runScripts: "dangerously" })
//     // console.log(dom.window.firstPageData)
//     let songlist = dom.window.firstPageData // 请求ip地址获得的歌单内容数据json
//     // console.log(songlist , 1)
//     // res.send(songlist)
//     // 将请求到的文件写到本地的demo.json文件里面
//     // fs.writeFile(`${__dirname}/demo.json`, songlist, {
//     //   encoding:"utf8"
//     // },function (err) {
//     //   if(err) throw err
//     //   console.log("写入songlist到本地json成功")
//     // })
//     detailTable.find({
//       id:req.params.id
//     }).then((data)=>{
//       // console.log(data) // []
//       if(data.length===0){ // 如果当前数据库，没有数据就进行创建数据库表并且发送储存。else否则，有数据的话，就显示有了
//         console.log("当前数据库中没有数据")
//         let finalData = {} // 存储 待添加到数据库的数据
//         finalData.id = songlist.taogeData.id // 设置歌单的基本id
//         // console.log(songlist.taogeData)
//         finalData.cover = songlist.taogeData.picurl // 设置歌单的封面
//         finalData.title = songlist.taogeData.title // 设置歌单的名称
//         finalData.songlist = []
//         finalData.tag = songlist.taogeData.tag
//         songlist.taogeData.songlist.forEach((item) => {
//           let singer = item.singer
//           finalData.songlist.push({
//             singer:singer,
//             mid:item.mid,
//             name:item.name
//           })
//         });
//         res.send(JSON.stringify(finalData))
//         detailTable.create(finalData)
//       } else {
//         console.log("已经有数据了")
//         res.send(JSON.stringify(data))
//       }
//     })
//     // res.send(songlist)
//   })
// })
// app.listen(9528)


module.exports = { // 拆分导出监听歌单详细内容的函数，并且在servejs文件里面接收
  getRecommendDetailData:function (req,res) {
    // console.log(req.params.id)
    request({
      method:"GET",
      // url:"https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=newyqq.taoge&id=7256912512",
      url:"https://i.y.qq.com/n2/m/share/details/taoge.html",
      qs:{
        ADTAG:"newyqq.taoge",
        id:req.params.id
      }
    },function (err,response,body) {
      let dom = new JSDOM(body, { runScripts: "dangerously" })
      // console.log(dom.window.firstPageData)
      let songlist = dom.window.firstPageData // 请求ip地址获得的歌单内容数据json
      // console.log(songlist , 1)
      // res.send(songlist)
      // 将请求到的文件写到本地的demo.json文件里面
      // fs.writeFile(`${__dirname}/demo.json`, songlist, {
      //   encoding:"utf8"
      // },function (err) {
      //   if(err) throw err
      //   console.log("写入songlist到本地json成功")
      // })
      detailTable.find({
        id:req.params.id
      }).then((data)=>{
        // console.log(data) // []
        if(data.length===0){ // 如果当前数据库，没有数据就进行创建数据库表并且发送储存。else否则，有数据的话，就显示有了
          console.log("当前数据库中没有数据")
          let finalData = {} // 存储 待添加到数据库的数据
          finalData.id = songlist.taogeData.id // 设置歌单的基本id
          // console.log(songlist.taogeData)
          finalData.cover = songlist.taogeData.picurl // 设置歌单的封面
          finalData.title = songlist.taogeData.title // 设置歌单的名称
          finalData.songlist = []
          finalData.tag = songlist.taogeData.tag
          songlist.taogeData.songlist.forEach((item) => {
            let singer = item.singer
            finalData.songlist.push({
              singer:singer,
              mid:item.mid,
              name:item.name
            })
          });
          res.send(JSON.stringify(finalData))
          detailTable.create(finalData)
        } else {
          console.log("已经有数据了")
          res.send(JSON.stringify(data))
        }
      })
      // res.send(songlist)
    })
  }
}
