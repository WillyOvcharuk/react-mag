import { combineReducers } from 'redux'
import filterReducer from './filters'
import itemsReducer from './items'

  const rootReducer = combineReducers({
      filters: filterReducer,
      items: itemsReducer,
  }) 

  export default rootReducer;