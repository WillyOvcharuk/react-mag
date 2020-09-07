import { combineReducers } from 'redux'
import filterReducer from './filters'
import itemsReducer from './items'

  const rootReducer = combineReducers({
      filterReducer,
      itemsReducer,
  }) 

  export default rootReducer;