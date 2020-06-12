import {combineReducers} from 'redux'
import counterReducer from './count'

/**
 * 合并上面定义的各个 reducer 形成一个 reducer 用于创建 Redux store
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const combinedReducer = combineReducers({
    counter: counterReducer,
});

export default combinedReducer;