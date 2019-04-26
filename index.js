import { createStore } from 'redux';

// ActionCreatorの責務はactionを作ってreturnするだけ。
const myActionCreator = (num=1) => {
    return {
        type: "INC_COUNTER",
        num
    };
};

// stateとactionを引数に受け取る。
// actionの種類で処理が変わる。
// stateを変更するのではなく、Object.assign()を使って新しいオブジェクトを作り、それを新しいstateにする。
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

// storeを作る際にreducerを渡す。
const myStore = createStore(myReducer);

// 動作確認
console.log(myStore.getState());
myStore.dispatch(myActionCreator(1));
myStore.dispatch(myActionCreator(2));
console.log(myStore.getState());
