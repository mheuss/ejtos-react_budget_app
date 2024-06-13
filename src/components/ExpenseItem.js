import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {HiMinusCircle, HiPlusCircle} from "react-icons/hi";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <h4 style={{color:'green'}}><HiPlusCircle onClick={event => increaseAllocation(props.name)}></HiPlusCircle></h4>
            </td>
            <td>
                <h4 style={{color:'red'}}><HiMinusCircle onClick={event => decreaseAllocation(props.name)}></HiMinusCircle></h4>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
