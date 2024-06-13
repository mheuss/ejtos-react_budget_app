
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newValue = event.target.value;
        // If we are attempting to set over 20000, show an alert
        if (newValue > 20000) {
            alert("Budget cannot exceed £20000");
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (newValue < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending total");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newValue
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;