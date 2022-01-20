import { useSelector } from "react-redux"
import { getAllPosts, getIsFetchingPosts, getErrorPosts } from "./reduxStore/posts/reducers/postsReducer";
const PostPropertyList = () => {
    const posts = useSelector(getAllPosts)
    const isFetching = useSelector(getIsFetchingPosts)


    console.log(posts)

    if (isFetching) {
        return <span>Loading...</span>
    }
    return (
        <div>
            <h2>Properties</h2>
            {posts.map(post => {
                return (
                    <div key={post._id}>

                        <h4>{post.title}</h4>
                        <h3>{post.price}</h3>
                        <h3>{post.description}</h3>
                        <h3>{post.pinCode}</h3>

                    </div>
                )



            })}
        </div>
    )
}
export default PostPropertyList;