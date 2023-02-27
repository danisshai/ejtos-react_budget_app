import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const handleNewBudget = (newBudget)=> {
        dispatch({
            type: 'NEW_BUDGET',
            payload: newBudget,
        })
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input type="number" step="10" value={budget} onChange={(e)=>handleNewBudget(e.target.value)}></input></span>
        </div>
    );
};
export default Budget;