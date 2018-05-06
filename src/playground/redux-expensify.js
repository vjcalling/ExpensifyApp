
import { createStore, combineReducers } from 'redux';

//--------------------------------------------------------------------------------------

//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch(action.type) {

        default:
            return state;
    }
};

//--------------------------------------------------------------------------------------

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch(action.type) {

        default:
            return state;
    }
};

//--------------------------------------------------------------------------------------

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

//--------------------------------------------------------------------------------------

const demoState = {
    expenses: [{
        id: 'asdfg',
        description: 'Jan rent',
        note: 'this was the payment for jan rent',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

//--------------------------------------------------------------------------------------