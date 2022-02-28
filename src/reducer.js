export const initialState = {
    basket: [],
    user: null,
};

//pentru a face total cosului
export const getBasketTotal = (basket) => 
   
    basket?.reduce((amount, item) => item.price+amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            //to update the user when they log in or log out
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return { //pot intelge cum functioneaza cu console.log-ul din header
                //mai intai imi arata ca a facut actiunea, ca a adaugat ceva in cos si ce a adaugat
                //apoi imi arata toate produsele din cos, inclusiv cel nou.
                ...state,
                basket: [...state.basket, action.item] //include in cos ce aveam inainte, dar si partea cu id, img, price, rating.. 
            }
            // break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]; //copiaza cosul
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            //if the item exists
            if(index >=0 ) {
                //item exits in basket, and remove it
                newBasket.splice(index, 1);
                
            }
            return { 
                ...state, 
                basket: newBasket
            };
        default: 
            return state;
    }
}

export default reducer;