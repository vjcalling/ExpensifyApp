
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


//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//--------------------------------------------------------------------------------------

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});


//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
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

        case 'SET_TEXT_FILTER':
            return {...state, 
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state, sortBy: 'date'
            };
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

// const expenseOne = store.dispatch(addExpense({description: 'rent', amount:100}));
// const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount:200}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

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

