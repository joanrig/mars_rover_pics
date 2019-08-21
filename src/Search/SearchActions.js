
export function setDate(date){
  return (dispatch) => {

      dispatch({ type:"SET_DATE", date })
     };
}
