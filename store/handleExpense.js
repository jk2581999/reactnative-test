import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const handleExpenseSlice = createSlice({
    name:'expenses',
    initialState,
    reducers:{
        addExpense:(state,action) =>{
            const {name,amount,date} = action.payload;
           const isValueExists = state.find((item)=>{
                return item.name === name;
            })
            if(isValueExists){
                state = state.map(value => {
                    if(value.name === name) {
                        value.amount +=  amount;
                        value.date = date;
                    }
                    return value;
                });
            }
            else{
                state.push({
                    name,
                    amount,
                    date
                })
            };
        }
    }
});

export const {addExpense} = handleExpenseSlice.actions;

export default handleExpenseSlice.reducer;