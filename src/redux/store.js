// https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store;

    // modalType - shared
    // reviews - shared
    // currentId - shared
    // helpful -shared util function
    // load more answers/reviews - shared util function?

    // cart
    // style select

    // outfit - shared
    // related products

    // reviews

    // questions / answers

//action
//a function that returns an object.  This object will have properties type, payload.
//Type describes what the action will do, payload by how much (or some parameters that will be needed)


//reducer
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

//store https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store
//configure store -> add new reducer


//SLICER: https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
//each slice get own file
//a slice has state, reducers, and actions in toolkit
//name your store
//initialize state
// reducers -> for each action, pass through state, action

//export by destructuring

//get rid of useState ->
// const {state} = useSelector(state => state.reducername)

//set up dispath hook const dispatch = useDispatch();
//pass in action into dispatch hook
//action can be given a payload, which allows you to pass in any value that you want

//shopping cart slice?
// style selector slice?