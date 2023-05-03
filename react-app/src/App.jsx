import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, deleteCustomerAction} from "./store/customerReduser";
import {addCashAction, getCashAction} from "./store/cashReduser";

function App() {


    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) =>{
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const deleteCustomer = (customer) =>{
        dispatch(deleteCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt( )))}>Add Cash</button>
                <button onClick={() => getCash(Number(prompt( )))}>Get Cash</button>
                <button onClick={() => addCustomer((prompt( )))}>Add Client</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => deleteCustomer(customer)} style={{fontSize: "2rem", border: "1px solid black", padding: "10 px", marginTop: 5}}>{customer.name}</div>
                    )}
                </div>
                :
                <div style={{fontSize: "2rem", marginTop: 20}}>
                    No clients!
                </div>
            }
        </div>
    );
}

export default App;
