import { createStore } from 'redux';


const store = createStore((state = {count: 0}, action) => {
    
    switch(action.type) {
        case 'INCREMENT': 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy   
            };
        case 'DEREMENT': 
            return {
                count: state.count - 1  
            };
        case 'RESET': 
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

//Increment
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'INCREMENT'
});


