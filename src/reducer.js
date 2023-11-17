

export const initialState ={
    basket: [],
    buynow:[],
    user:null
   
};



const reducer = (state , action) => {
    switch(action.type) {
        case "Add_to_Basket":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

            case "Click_To_Buy":
                return{
                    ...state,
                    buynow: [...state.basket, action.item],
                };

        case 'Empty_Basket':
            return {
                ...state,
                basket:[]
            }

        case "delete_from_cart":
        const index = state.basket.findIndex(
            (basketItem) => basketItem.title === action.title
        );
        let newbasket = [...state.basket];
        if (index >= 0){
            newbasket.splice(index,1);
        }
        // else {
        //     console.warn(
        //         `cant remove ${action.title} as its not in basket `
        //     )
        // }

        return{
            ...state,
            basket: newbasket
        }

        case "Set_User":
            return{
                ...state,
                user: action.user
            }

         default:
             return state;
    } 
};
export default reducer;
