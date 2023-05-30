const NewsReducer = (state,action)=>{

switch(action.type){
    case "GETNEWS":
        return{
            ...state,
            news : action.payload,
          
        }
       
     
        default :
        return state
}

}
export default NewsReducer