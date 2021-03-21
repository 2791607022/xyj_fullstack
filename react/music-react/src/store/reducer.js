//首页，singers ，排行榜，模块化
import {reducer as recommendReducer} from '../pages/Recommend/store'
import {combineReducers} from 'redux'
export default combineReducers({
    recommend:recommendReducer
    // recommend:,
    // singers:,
    // rank:,
})