export  function propertysReducer(
    state = {
        all: [],
        isFetching: false,
        isError: false,
        errorMessage: null
    },
    action
) {
    switch (action.type) {
        case "POSTS_FETCH_REQUEST":
            return {
                ...state,
                isFetching: true
            }
        case "POSTS_FETCH_SUCCESS":
            return {
                ...state,
                isFetching: false,
                all:action.payload
            }
        case "POSTS_FETCH_FAILURE":
            return {
                ...state,
                isFetching: false,
                isError:true,
                errorMessage:action.payload
            }
        default:
            return state
    }
}

// Selectors
export const getAllPosts =state=>state.posts.all;
export const getErrorPosts =state=>state.posts.isError;
export const getIsFetchingPosts =state=>state.posts.isFetching;