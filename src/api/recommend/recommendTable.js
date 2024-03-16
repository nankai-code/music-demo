const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/kuku",{
  useNewUrlParser: true,
  useUnifiedTopology:true
})

let recommendShema = new Schema({
  category:{
    type:String,
    required:true
  },
  categoryList:[
    {
      id:{
        type:String,
        required:true
      },
      cover:{
        type:String,
        required:true
      },
      title:{
        type:String,
        required:true
      }
    }
  ]
})

let recommendDatas = mongoose.model("recommendData",recommendShema)

module.exports={
  recommendTable:recommendDatas
}