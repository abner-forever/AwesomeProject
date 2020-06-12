
function counterReducer(state = {value: 0, updateTime: new Date()}, action) {
    if (typeof action === 'undefined') {
        return state;
    }

    const value = state.value;
    const now = new Date();
    switch (action.type) {
        case 'INCREMENT':
            // 构造新的状态对象并返回
            return {...state, value: value + 1, updateTime: now};
        case 'DECREMENT':
            // 构造新的状态对象并返回
            return {...state, value: value - 1, updateTime: now};
        default:
            // 没有改动发生，返回原状态对象
            return state;
    }
}
export default counterReducer

