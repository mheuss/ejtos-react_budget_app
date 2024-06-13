import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
// Add code to import the other components here under
import Remaining from "./components/Remaining";



import {AppContext, AppProvider} from './context/AppContext';
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import {ChangeCurrency} from "./components/ChangeCurrency";
const App = () => {
    // const { dispatch,remaining  } = useContext(AppContext);

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget/>
                    </div>
                    <div className='col-sm'>
                        <Remaining/>
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal/>
                    </div>

                    <div className='col-sm'>
                        <ChangeCurrency/>
                    </div>


                    <div>
                        <h2 className='mt-3'>Allocation</h2>
                        <ExpenseList
                        />

                    </div>

                    <div>
                        <h2 className='mt-3'>Change allocation</h2>
                        <AllocationForm/>

                    </div>


                </div>
            </div>
        </AppProvider>
    );
};
export default App;
