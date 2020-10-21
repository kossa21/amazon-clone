//The reducer is always listening and 
//basically is in charge of DISPATCHING (sending) the information from a component to the data layer and pulling it 


//Create the initial state

export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET': 
            return {
                //whatever the state originally was
                ...state,
                //but changing the basket to whatever it was before plus the new item
                basket: [...state.basket, action.item],
            }

        case 'REMOVE_FROM_BASKET': 
            const index = state.basket.findIndex( basketItem => basketItem.id === action.id);

            let newBasket = [...state.basket];

            if(index >= 0) {
                //The given item was found in the basket 

                newBasket.splice(index, 1);

            } else {
                //The given item does not exist in the basket!

                console.warn(`Can't remove product (id: ${action.id}) as its not in the basket!`);
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
                return state;
    }
};

export default reducer;