import { ActionTypes } from "./actionTypes";
import { toast } from "react-toastify";

const initState = {
    isLoading: false,
    isError: false,
    products: [],
    carts:[],
  };

  if(localStorage.getItem('carts')) {
       initState.carts = JSON.parse(localStorage.getItem('carts'));
  }else {
       initState.carts = [];
  }
  
  export const productsReducer = (state = initState, { type, payload }) => {
      switch(type) {
        case ActionTypes.SET_PRODUCTS: 
             return {...state, products: payload};
        default:
             return state;    
      }
  };

  export const selectedProductsReducer = (state = {}, {type, payload}) => {
    switch(type) {
      case ActionTypes.SELECTED_PRODUCT: 
           return {...state, ...payload};
      default:
           return state;    
    }
  }
  

  export const cartreducer = (state=initState, action)=> {
       switch(action.type){
            case "ADD_TO_CART":
            
            const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
            if(IteamIndex>=0){
                 state.carts[IteamIndex].qnty+=1
                 toast.info(`${state.carts[IteamIndex].title} increased by ${state.carts[IteamIndex].qnty} `, {
                    position: "bottom-left",
                  })
            }else{
                 const temp = {...action.payload, qnty:1}
                 toast.success(`${action.payload.title} added to your cart`, {
                    position: "bottom-left",
                  })
                 return {
                    ...state,
                    carts:[...state.carts, temp]
               }
            }
                 

             case "REMOVE_FROM_CART":
                  const data = state.carts.filter((cartItem)=>cartItem.id !==action.payload)    
                  return {
                       ...state,
                       carts: data
                  }

             case "REMOVE_ONE":
               const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
               if(state.carts[IteamIndex_dec].qnty>=1){
                    const dltitem = state.carts[IteamIndex_dec].qnty-=1
                    console.log([...state.carts, dltitem]);

                    return {
                         ...state,
                         carts: [...state.carts]
                    }
               }else if(state.carts[IteamIndex_dec].qnty == 1){
                    const data = state.carts.filter((cartItem)=>cartItem.id !==action.payload)    
                    return {
                         ...state,
                         carts: data
                    }
               }
                 default :
                 return state
       }
  }

  