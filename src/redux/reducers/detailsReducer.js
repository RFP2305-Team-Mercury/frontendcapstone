import {SET_DETAILS} from '../actions'

const initialState= {
  "id": 40347,
  "campus": "hr-rfp",
  "name": "Slacker's Slacks",
  "slogan": "Comfortable for everything, or nothing",
  "description": "I'll tell you how great they are after I nap for a bit.",
  "category": "Pants",
  "default_price": "65.00",
  "created_at": "2021-08-13T14:38:44.509Z",
  "updated_at": "2021-08-13T14:38:44.509Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "99% Cotton 1% Elastic"
      },
      {
          "feature": "Cut",
          "value": "Loose"
      }
  ]
}

const detailsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_DETAILS':
      return action.payload;
    default:
      return state
  }
}
export default detailsReducer;