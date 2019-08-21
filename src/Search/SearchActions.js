


export function setRover(rover){
  return (dispatch) => {
    dispatch({ type: "SET_ROVER", rover })
  }
}

export function setDate(date){
  debugger
  return (dispatch) => {
    dispatch({ type: "SET_DATE", date })
  }
}

export function setCamera(camera){
  return (dispatch) => {
    dispatch({ type: "SET_CAMERA", camera })
  }
}

export function fetchPics(url){
return (dispatch) => {
    return fetch(url)
    .then(resp => resp.json())
    .then(photos =>dispatch({type:"SET_PHOTOS", photos} ))
   };
}
