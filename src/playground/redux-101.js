import { createStore } from 'redux';

//----------------------------------------------------------------------------

const store = createStore((state = {count: 0}, action) => {
    
    switch(action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy   
            };
        case 'DECREMENT': 
            return {
                count: state.count -  action.decrementBy
            };
        case 'RESET': 
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: action.setBy
            };
        default:
            return state;
    }
});

//----------------------------------------------------------------------------

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

//----------------------------------------------------------------------------

const incrementCount = ({incrementBy = 1} = {}) => ({   //destructuring object and setting default value
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({   //destructuring object and setting default value
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({  
    type: 'RESET'
});

const setCount = ({setBy = 1} = {}) => ({   //destructuring object and setting default value
    type: 'SET',
    setBy
});

//----------------------------------------------------------------------------

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({setBy: 125}));

//----------------------------------------------------------------------------


