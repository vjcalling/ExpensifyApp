
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//--------------------------------------------------------------------------------------

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//--------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------

//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];  //[state.concat(action.expense)];   --> changing to spread operator for better control.
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount:100}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount:200}));
store.dispatch(removeExpense({id: expenseOne.expense.id}));

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

const user = {
    name: 'Vibhor',
    age: 30
}

console.log(({...user}));