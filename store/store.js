import { configureStore } from '@reduxjs/toolkit';
import handleExpense from './handleExpense';

export const store = configureStore({
    reducer: {
        expenses:handleExpense,
    },
});
