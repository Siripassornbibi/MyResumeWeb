import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamp: true,
    }
)

const Post = mongoose.model.Post || mongoose.model("Post", postSchema);
export default Post;