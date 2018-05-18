import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import {editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


import 'normalize.css/normalize.css';
import './styles/styles.scss';
//----------------------------------------

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'water bill', amount:100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'gas bill', amount:100, createdAt: -21000}));
store.dispatch(setTextFilter('gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter/>, document.getElementById("app"));