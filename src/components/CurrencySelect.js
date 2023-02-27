import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelect = () => {
    const { expenses, dispatch, currency } = useContext(AppContext);
    const handleChangeCurrency = (newCurrency)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
        return;
    }
    let currencies = [["$","Dollar"],["£","Pound"],["€","Euro"],["₹","Ruppee"]]
    return (
        <div className='alert alert-primary'>
            <span> Currency: 
             <select value={currency} style={{backgroundColor:"#c5e1a5", borderRadius:"10px"}} className="" id="" onChange={(event) => handleChangeCurrency(event.target.value)}>
                        {/* <option defaultValue>Choose...</option> */}
                {currencies.map((currency_) =>(<option value={currency_[0]} name={currency_[1]} >  {currency_[0]} {currency_[1]}</option> ))}    
                  </select>
            </span>
        </div>
        
    );
};
export default CurrencySelect;