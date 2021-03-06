import {combineReducers} from 'redux';
import charactersReducer from './charactersReducer';
import characterReducer from './characterReducer';
import locationsReducer from './locationsReducer';
import locationReducer from './locationReducer';
import episodesReducer from './episodesReducer';
import episodeReducer from './episodeReducer';

export default combineReducers({
   characters: charactersReducer,
   character: characterReducer,
   locations: locationsReducer,
   location: locationReducer,
   episodes: episodesReducer,
   episode: episodeReducer
});