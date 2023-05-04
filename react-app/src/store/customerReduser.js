
const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const DELETE_CUSTOMERS = "DELETE_CUSTOMERS";

export const customerReduser = (state = defaultState,action) =>{

    switch (action.type){

        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}

        case ADD_CUSTOMER:
            return {...state, customers: [... state.customers, action.payload]};


        case DELETE_CUSTOMERS:
            return {...state,  customers: state.customers.filter(customer => customer.id !== action.payload)};

        default:
            return state;
    }
}


export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const deleteCustomerAction = (payload) => ({type: DELETE_CUSTOMERS, payload});