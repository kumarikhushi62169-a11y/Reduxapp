  
  const initialState = {
    products: [],
  };
  export const productReducer=( state=initialState,action)=>{
if(action.type === "ADD_TO_PRODUCT")
    // return console.log(state);
    return state;
  }