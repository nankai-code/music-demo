const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 链接数据库
mongoose.connect("mongodb://127.0.0.1:27017/kuku", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  // eslint-disable-next-line no-console
  console.log("连接成功")
}).catch(() => {
  // eslint-disable-next-line no-console
  console.log("连接失败")
});

// 新建表规则
let singerShema = new Schema({
  "singer_id": String, // 歌手的id
  "singer_mid": String,//方便后期获取歌手的详细信息
  "singer_name": String,
  "singer_pic": String,
});

// 新建一个表
let singer = mongoose.model("singer", singerShema);

// 将表一放
module.exports = {
  singerTable: singer
};