import React from "react";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export function ChangeCurrency() {
    const { dispatch, currency } = useContext(AppContext);
    const currencies = [
        {
            label: 'Currency ($ Dollar)',
            value: '$',
        },
        {
            label: 'Currency (£ Pound)',
            value: '£',
        },
        {
            label: 'Currency (€ Euro)',
            value: '€',
        },
        {
            label: 'Currency (₹ Rupee)',
            value: '₹',
        },
    ];

    const menuItemStyles = {
        color: 'green',
        backgroundColor: 'green',
    };

    const selectedItemStyles = {
        color: 'green',
        backgroundColor: 'white',
    };

  return (
      <div className='alert alert-secondary'>
          <div className={"custom-select"}>
              <select
                  style={{
                      color: 'white',
                      backgroundColor: 'green',
                      border: '1px solid green',
                      padding: '5px',
                  }}
                  value={currency}
                  onChange={(event) => {
                      const newValue = event.target.value;
                      console.log(newValue);
                      dispatch({
                          type: 'CHG_CURRENCY',
                          payload: newValue,
                      })
                  }}
              >
                  {currencies.map((current)=>{
                        return (
                            <option
                                style={
                                    currency === current ? selectedItemStyles : menuItemStyles
                                }
                                value={current.value}>{current.label}</option>
                        );
                  })}
              </select>
          </div>
      </div>);
}