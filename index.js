import { createStore } from 'redux';

const myActionCreator = (num=1) => {
    return {
        type: "INC_COUNTER",
        num
    };
};

const myReducer = (state={counter:0}, action) => {
    switch(action.type){
        case 'INC_COUNTER':
            return Object.assign({}, state, {
                counter: state.counter + action.num
            });
        default:
            return state;
    };
};

const myStore = createStore(myReducer);

// この時点で、Reduxは機能している
// 以下は動作確認

console.log(myStore.getState());
myStore.dispatch(myActionCreator(1));
myStore.dispatch(myActionCreator(2));
console.log(myStore.getState());
