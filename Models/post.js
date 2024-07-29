const Mongoose=require("mongoose")
const postSchema=Mongoose.Schema(
    {
        userId:{
            type:Mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        Message:String,
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)
var postModel=Mongoose.model("post",postSchema)
module.exports=postModel