import axios from "axios";

export function fetchPosts() {
    return function (dispatch) {
        dispatch({ type: "POSTS_FETCH_REQUEST", payload: {} })
        axios.get("http://localhost:3001/posts")
            .then(response => {
                // pass data to reducer in case of success
                dispatch({ type: "POSTS_FETCH_SUCCESS", payload: response.data })
            })
            .catch(error => {
                //we have to tell reducer to show error message
                dispatch({ type: "POSTS_FETCH_FAILURE", payload: "Something went wrong" })
            })
    }
}