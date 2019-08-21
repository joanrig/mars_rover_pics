export default (state = {
  photos: [],
  rover: "",
  camera: "",
  date: "",
  showStepThree: false

}, action) => {
    switch(action.type){

    case "SET_ROVER":
      return ({...state, rover: action.rover })

    case "SET_DATE":
      return ({...state, date: action.date, showStepThree: true })

    case "SET_CAMERA":
        return ({...state, camera: action.camera })

    case "SET_PHOTOS":
      return ({...state, photos: action.photos })

     default:
        return state
    }
  }
