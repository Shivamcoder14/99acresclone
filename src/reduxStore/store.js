import {createStore,combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Import  reducers
import {postsReducer} from "./posts/reducers/postsReducer";

export const store=createStore(
  
    combineReducers({
        posts:postsReducer,
        // comments:commentReducer

    }),
    composeWithDevTools(applyMiddleware(thunk))
)