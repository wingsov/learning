
const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMERS = "DELETE_CUSTOMERS";

export const customerReduser = (state = defaultState,action) =>{

    switch (action.type){
        case ADD_CUSTOMER:
            return {...state, customers: [... state.customers, action.payload]};


        case DELETE_CUSTOMERS:
            return {...state,  customers: state.customers.filter(customer => customer.id !== action.payload)};

        default:
            return state;
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const deleteCustomerAction = (payload) => ({type: DELETE_CUSTOMERS, payload});