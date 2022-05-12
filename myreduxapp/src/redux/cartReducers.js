// import { ActionTypes } from "./actionTypes";

// const initState = {
//     products: [],
//     totalPrice: 0,
//     totalQuantities: 0,
// }

// const CartReducers = (state=initState, action) => {
//     switch(action.type) {
//         case ActionTypes.ADD_TO_CART:
//             console.log(action.payload)
//             const check = state.products.find(product=>product.id===action.payload.product.id)
//         default:
//             return state;
//     }
// }

// export default CartReducers;