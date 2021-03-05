import {combineReducers} from 'redux';
import charactersReducer from './charactersReducer';
import characterReducer from './characterReducer';
import locationsReducer from './locationsReducer';
import locationReducer from './locationReducer';

export default combineReducers({
   characters: charactersReducer,
   character: characterReducer,
   locations: locationsReducer,
   location: locationReducer,
});