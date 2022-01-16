import { useSelector } from "react-redux"
import { getAllPosts, getIsFetchingPosts, getErrorPosts } from "./reduxStore/posts/reducers/propertysReducer";
const PropertysList = () => {
    const posts = useSelector(getAllPosts)
    const isFetching = useSelector(getIsFetchingPosts)


    console.log(posts)

    if (isFetching) {
        return <span>Loading...</span>
    }
    return (
        <div>
            <h2>Cities</h2>
            {posts.map(post => {
                return (
                    <div key={post._id}>

                        <h4>{post.title}</h4>
                        <h6>{post.description}</h6>
                        <p>{post.price}</p>
                        <p>{post.propertyImage}</p>
                    </div>
                )



            })}
        </div>
    )
}
export default PropertysList;